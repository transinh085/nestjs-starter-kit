import { BaseRepository } from 'src/common/repository/base-repository';
import { User } from '../entites/user.entity';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
}
