import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
// import { Formation } from './entities/formation.entity';
import { PrismaService } from 'prisma/prisma.service';
import { Formation } from './entities/formation.entity';
import { Prisma } from 'prisma/generated/prisma/client';

@Injectable()
export class FormationService {

  constructor(private readonly prisma : PrismaService){
    
    
  }
  //On creer un objet de tableau
 formations: Formation[] = [];
  private counter = 1;
  create(newFormation: CreateFormationDto) {
    // Pour créer on va vérifier si on a bien récup les données du body(formationdto)
    if (!newFormation.name) throw new BadRequestException();
    // On vérifie si le nom existe dejà
    const alreadyExists = this.formations.find(
      (formation) => formation.name === newFormation.name,
    );
    if (alreadyExists) {
      throw new ConflictException('Formation déjà existante');
    }
    // si ok créer une nouvelle formation
    const formation: Formation = {
      id: this.counter++,
      name: newFormation.name,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.formations.push(formation); 

    console.log('🚀 ~ FormationService ~ create ~ formation:', formation);

    return formation;
  }

  async findAll(options : {take?:number, skip?: number, select: Prisma.FormationSelect}):Promise<Partial<Formation>[]> {
    return this.prisma.formation.findMany({
    ...options
    })
  }

  ///Gerer dans le controller les responsabilités
 findOne(id: number) {
  const formation = this.formations.find(f => f.id === id);

  if (!formation) {
    throw new NotFoundException(`formation avec id ${id} non trouvée`);
  }

  console.log("🚀 ~ FormationService ~ findOne ~ formation:", formation);

  return formation;
}


  update(id: number, bodyFormation : UpdateFormationDto) {
  // Chercher la formation dans le tableau
  const formation = this.formations.find((formation) => formation.id === id);

  // Si aucune formation ne correspond à l'identifiant
  if (!formation) {
    throw new NotFoundException(`La formation avec l’identifiant ${id} n’existe pas`);
  }

  // Mettre à jour le nom si le corps de la requête en contient un
  if (bodyFormation.name) {
    formation.name = bodyFormation.name;
  }

  // Mettre à jour la date
  formation.updatedAt = new Date();

  // Retourner la formation mise à jour
  return formation;
}
  remove(id: number) {
    return `This action removes a #${id} formation`;
  }
}
