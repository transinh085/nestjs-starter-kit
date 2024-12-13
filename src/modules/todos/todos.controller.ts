import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';
import { CreateTodoItemDto } from './dto/create-todo-item.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.createTodo(createTodoDto);
  }

  @Post('items')
  createTodoItem(@Body() createTodoItemDto: CreateTodoItemDto) {
    return this.todosService.createTodoItem(createTodoItemDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.todosService.findAllTodos(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOneTodo(+id);
  }
}
