import { IsOptional, IsNumberString} from 'class-validator';
import { Transform } from 'class-transformer';

/// Erreur de type sur Type(()=> Number)

export class FindAllFormationQueryDto {

    @IsOptional()
    @IsNumberString()
    //@Type(()=> Number)
    take?: number;


    @IsNumberString()
    @IsOptional()
    //@Type(()=> Number)
    // @Transform( ParseInt )
        // (v)=>{
        // return +v}
    skip?: number;

    id? : boolean;
    name? : boolean;
    createdAt? : boolean;
    updatedAt? : boolean;


}