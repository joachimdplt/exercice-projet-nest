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
    /// j'ajoute un objet avec clef data qui elle meme est un objet 
    const userCreated = await this.prisma.user.create({
      data: {
        name : createUserDto.name,
        email: createUserDto.email
      } 
    })


    console.log("🚀 ~ UserService ~ create ~ userCreated:", userCreated)
    return userCreated;
  }
  /// Je passe en async puis je declare une variable user qui appelle la methode findMany
  /// Je suis le même process depuis le verbe j'accède aux arguments ainsi que qu'au type attendu
  async findAll() {
    const users = await this.prisma.user.findMany()
    console.log("🚀 ~ UserService ~ findAll ~ users:", users)
    
    return users;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: {
        id: id,
      }
    })

    console.log("🚀 ~ UserService ~ findOne ~ user:", user)
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
