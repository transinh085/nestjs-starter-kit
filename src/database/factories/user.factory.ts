import { setSeederFactory } from 'typeorm-extension';
import { Faker } from '@faker-js/faker';
import { User } from '../../modules/user/entites/user.entity';

export default setSeederFactory(User, (faker: Faker) => {
  const user = new User();

  user.email = faker.internet.email();
  user.password = faker.internet.password();
  user.fullName = faker.person.fullName();

  return user;
});
