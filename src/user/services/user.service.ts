import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Observable, from } from 'rxjs';
import { User } from '../models/user.interface';
import { UserEntity } from '../models/user.entity';

@Injectable()
export class userService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  createUser(user: User): Observable<User> {
    console.log('user in service', user);
    return from(this.userRepository.save(user));
  }
}
