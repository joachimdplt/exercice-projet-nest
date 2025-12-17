import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class GroupService {
  constructor( private prisma : PrismaService){}
  async create(createGroupDto: CreateGroupDto) {

    const groupCreated = await this.prisma.group.create({
      data: {
        name: createGroupDto.name,
        formation: {
          connect: { id: createGroupDto.formationId } // relie la Formation existante
        },
        lead: {
          connect: { id: createGroupDto.leadId } // relie le TeamMember existant
        }

      }
    })
    return 'This action adds a new group';
  }

  findAll() {
    return `This action returns all group`;
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
