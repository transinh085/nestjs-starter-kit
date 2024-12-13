import { Todo } from '../../modules/todos/entities/todo.entity';
import { setSeederFactory } from 'typeorm-extension';
import { Faker } from '@faker-js/faker';

export default setSeederFactory(Todo, (faker: Faker) => {
  const todo = new Todo();
  todo.title = faker.lorem.words(3);
  todo.description = faker.lorem.sentence();
  todo.isArchived = faker.datatype.boolean();
  todo.createdAt = faker.date.recent();
  todo.updatedAt = faker.date.recent();
  return todo;
});
