import { Exclude } from 'class-transformer';
import { Entity } from 'typeorm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  fullName: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
