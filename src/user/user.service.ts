import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';


@Injectable()
export class UserService {
  // 2- J'ajoute un constructor pour utiliser prisma dans le service
  constructor(private prisma : PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    ///  1 - Je créer la variable creation USER > ça ne marche pas il faut utiliser prisma dans le service via le constructeur
    ///  3 -  J'appelle le service de manière async mais je reçois une erreur sur create()
    /// click sur le verbe > Affiche les argument pour créer un user
    // j'ajoute un objet avec clef data qui elle meme est un objet 
    const userCreated = await this.prisma.user.create({
      data: {
        name : createUserDto.name,
        email: createUserDto.email
      } 
    })


    return userCreated;
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
