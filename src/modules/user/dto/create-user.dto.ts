import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  fullName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isActive: boolean = true;
}
