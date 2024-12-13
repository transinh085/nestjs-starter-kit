import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiParam } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.userService.findAll(paginationDto);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  @ApiParam({ name: 'id', type: 'number' })
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'number' })
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: 'number' })
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}
