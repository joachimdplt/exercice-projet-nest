import { IsInt, IsNotEmpty, IsString } from 'class-validator';

/// Le DTO ne founir que ce que l'utilisateur doit fournir

export class CreateGroupDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsInt()
  formationId!: number;

  @IsInt()
  leadId!: number; // TeamMemberId
}
