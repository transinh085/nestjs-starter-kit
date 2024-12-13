import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { TodoItem } from './entities/todo-item.entity';
import { TodoRepository } from './repositories/todo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, TodoItem])],
  controllers: [TodosController],
  providers: [TodosService, TodoRepository],
})
export class TodosModule {}
