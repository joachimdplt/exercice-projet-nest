import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';


@Injectable()
export class UserService {
  // 2- J'ajoute un constructor pour utiliser prisma dans le service
  constructor(private prisma : PrismaService) {}

  create(createUserDto: CreateUserDto) {
    ///  1 - Je créer la variable creation USER > ça ne marche pas il faut utiliser prisma dans le service via le constructeur
    const userCreated = 


    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
