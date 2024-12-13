import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  password: string;
}
