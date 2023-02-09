import {
  IsEmail,
  IsInt,
  isInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateSpotDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'Title is too short',
  })
  @MaxLength(30, {
    message: 'Title is too long',
  })
  title: string;

  @IsString()
  @MinLength(10, {
    message: 'Description is too short',
  })
  @MaxLength(50, {
    message: 'Description is too long',
  })
  description: string;

  @IsString()
  @MinLength(10, {
    message: 'Adress is too short',
  })
  @MaxLength(50, {
    message: 'Adress is too long',
  })
  adress: string;

  coordinates: string;
}
