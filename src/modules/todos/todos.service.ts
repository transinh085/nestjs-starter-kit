import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { TodoItem } from './entities/todo-item.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { CreateTodoItemDto } from './dto/create-todo-item.dto';
import { PaginatedResult } from 'src/common/interfaces/paginated-result';
import { TodoRepository } from './repositories/todo.repository';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class TodosService {
  constructor(
    private todoRepository: TodoRepository,
    @InjectRepository(TodoItem)
    private todoItemRepository: Repository<TodoItem>,
  ) {}

  async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = this.todoRepository.create(createTodoDto);
    return await this.todoRepository.save(todo);
  }

  async createTodoItem(
    createTodoItemDto: CreateTodoItemDto,
  ): Promise<TodoItem> {
    const todo = await this.todoRepository.findOne({
      where: { id: createTodoItemDto.todoId },
    });

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    const todoItem = this.todoItemRepository.create({
      content: createTodoItemDto.content,
      todo: todo,
    });

    return await this.todoItemRepository.save(todoItem);
  }

  async findAllTodos(
    paginationDto: PaginationDto,
  ): Promise<PaginatedResult<Todo>> {
    return await this.todoRepository.paginate(paginationDto);
  }

  async findOneTodo(id: number): Promise<Todo> {
    const todo = await this.todoRepository.findOne({
      where: { id },
      relations: ['items'],
    });

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    return todo;
  }
}
