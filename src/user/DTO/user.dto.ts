import {
  IsEmail,
  IsInt,
  isInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Spot } from 'src/spot/models/spot.interface';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  first_name?: string;

  @IsNotEmpty()
  @IsString()
  last_name?: string;

  @IsEmail()
  @IsNotEmpty()
  email?: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @MinLength(10, {
    message: 'Adress is too short',
  })
  @MaxLength(50, {
    message: 'Adress is too long',
  })
  adress?: string;

  createdAt?: Date;

  spots?: Spot[];
}

export class AddSpotToUSerDto {
  @IsNotEmpty()
  @IsInt()
  spotId: number;
}

export class updateUserDto {
  @IsString()
  first_name?: string;

  @IsString()
  last_name?: string;

  @IsEmail()
  email?: string;

  @MinLength(10, {
    message: 'Adress is too short',
  })
  @MaxLength(50, {
    message: 'Adress is too long',
  })
  adress?: string;
}
