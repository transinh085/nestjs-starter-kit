import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Todo } from './todo.entity';

@Entity()
export class TodoItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column({ default: false })
  isCompleted: boolean;

  @ManyToOne(() => Todo, (todo) => todo.items)
  todo: Todo;
}
