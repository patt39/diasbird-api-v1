import {
  AnimalStatus,
  AnimalType,
  Gender,
  ProductionPhase,
} from '@prisma/client';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class CreateOrUpdateAnimalsDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  code: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  codeFather: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  codeMother: string;

  @IsOptional()
  @IsInt()
  weight: number;

  @IsNotEmpty()
  @IsString()
  birthday: Date;

  @IsNotEmpty()
  @IsString()
  @IsEnum(Gender)
  gender: Gender;

  @IsNotEmpty()
  @IsString()
  @IsEnum(AnimalType)
  type: AnimalType;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @IsEnum(ProductionPhase)
  productionPhase: ProductionPhase;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  electronicCode: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  locationId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  breedId: string;
}
export class GetAnimalsByStatus {
  @IsOptional()
  @IsString()
  @IsEnum(AnimalStatus)
  status: AnimalStatus;
}
export class GetAnimalsByType {
  @IsOptional()
  @IsString()
  @IsEnum(AnimalType)
  type: AnimalType;
}
export class GetAnimalsByGender {
  @IsOptional()
  @IsString()
  @IsEnum(Gender)
  gender: Gender;
}
export class GetAnimalsByProductionPhase {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  @IsEnum(ProductionPhase)
  productionPhase: ProductionPhase;
}
