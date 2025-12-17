import {
  Controller,
  Get,
  Post,
  Body,
  //Patch,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { FormationService } from './formation.service';
//import { UpdateFormationDto } from './dto/update-formation.dto';

@Controller('formation')
export class FormationController {
  constructor(private readonly formationService: FormationService) {}

  @Post()
  create(@Body() bodyFormation) {
    return this.formationService.create(bodyFormation);
    //const result = this.formationService.create(bodyFormation);
  }

  @Get()
  findAll() {
    return this.formationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('🚀 ~ FormationController ~ findOne ~ id reçu :', id);
    const formation = this.formationService.findOne(+id);
    console.log('🚀 ~ FormationController ~ findOne ~ formation :', formation);
    return formation;
  }
  
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() bodyFormation,
  ) {
    return this.formationService.update(+id, bodyFormation);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formationService.remove(+id);
  }
}
