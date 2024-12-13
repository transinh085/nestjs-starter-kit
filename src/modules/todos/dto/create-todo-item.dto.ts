import { IsString, IsNumber } from 'class-validator';

export class CreateTodoItemDto {
  @IsString()
  content: string;

  @IsNumber()
  todoId: number;
}
