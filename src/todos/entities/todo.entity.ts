import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TodoItem } from './todo-item.entity';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => TodoItem, (todoItem) => todoItem.todo, {
    cascade: true,
  })
  items: TodoItem[];
}
