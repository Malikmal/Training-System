import { Injectable } from '@nestjs/common';
import { User } from '../schemas/user.schema';
import { UserRepository } from '../repositories/user.repository';
import { userCreateDto } from '../dto/user.create.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(userCreateDto: userCreateDto): Promise<User> {
    return this.userRepository.create(userCreateDto);
  }
}
