import { Todo } from '../../modules/todos/entities/todo.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class TodoSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const todoFactory = factoryManager.get(Todo);
    await todoFactory.saveMany(300);
  }
}
