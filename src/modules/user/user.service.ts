import { Injectable, NotFoundException } from '@nestjs/common';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { UserRepository } from './repositories/user.repository';
import { PaginatedResult } from 'src/common/interfaces/paginated-result';
import { User } from './entites/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(paginationDto: PaginationDto): Promise<PaginatedResult<User>> {
    return await this.userRepository.paginate(paginationDto);
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.save(createUserDto);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    return await this.userRepository.save({ ...user, ...updateUserDto });
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) throw new NotFoundException(`User with ID ${id} not found`);

    return user;
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.delete(user);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email } });
  }
}
