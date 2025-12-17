import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { FormationService } from './formation.service';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { Formation, User } from 'prisma/generated/prisma/client';
import { FindAllFormationQueryDto } from './dto/query-formation.dto';
// interface ISelectFormation {
//   id?: boolean;
//   name?: boolean;
//   createdAt?: boolean;
//   updatedAt?: boolean;
// }

// type TSelectFormation = Partial<Record<keyof Formation,boolean>>
// export type TSelect<T> = Partial<Record<keyof T,boolean>>;
// const testSelect: TSelect<User>= {name : true, email : true}
// type Select<T> = { [K in keyof T]?: boolean }


@Controller('formation')
export class FormationController {
  constructor(private readonly formationService: FormationService) {}

  @Post()
  create(@Body() bodyFormation ) {
    return this.formationService.create(bodyFormation);
    //const result = this.formationService.create(bodyFormation);
  }
  
  // GET formation?take=10&skip=0
  // GET formation

  @Get()
  findAll(

    @Query() query: FindAllFormationQueryDto
    // @Query("take") take: string,
    // @Query("skip") skip: string,
  ) {
    const {take, skip, ...select} = query
    return this.formationService.findAll({take, skip, select}); // +"a" => NaN ||  +"1" => 1
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) { // sécurité sur la route si on ne passe pas nombre ça stoppe tout
    console.log('🚀 ~ FormationController ~ findOne ~ id reçu :', id);
    const formation = this.formationService.findOne(+id);
    console.log('🚀 ~ FormationController ~ findOne ~ formation :', formation);
    return formation;
  }
  
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() bodyFormation : UpdateFormationDto,
  ) {
    return this.formationService.update(+id, bodyFormation);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formationService.remove(+id);
  }
}
