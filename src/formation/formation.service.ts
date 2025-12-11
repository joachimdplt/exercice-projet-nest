import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateFormationDto } from './dto/create-formation.dto';
//import { UpdateFormationDto } from './dto/update-formation.dto';
import { Formation } from './entities/formation.entity';

@Injectable()
export class FormationService {
  //On creer un objet de tableau
  private formations: Formation[] = [];
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

  findAll() {
    console.log('🚀 ~ FormationService ~ findAll ~ findAll:', this.formations);
    return this.formations;
  }

  findOne(id: number) {
    const formation = this.formations.find(formation => formation.id === id);
    if (!formation) throw new NotFoundException(`formation avec id ${id} non trouvée`)
      console.log("🚀 ~ FormationService ~ findOne ~ formation:", formation.id)
    return {id: formation.id };
  }

  /*update(id: number, updateFormationDto: UpdateFormationDto) {
    return `This action updates a #${id} formation`;
  }
*/
  remove(id: number) {
    return `This action removes a #${id} formation`;
  }
}
