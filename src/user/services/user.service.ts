import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Observable, from } from 'rxjs';
import { User } from '../models/user.interface';
import { UserEntity } from '../models/user.entity';
import { SpotEntity } from 'src/spot/models/spot.entity';

@Injectable()
export class userService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>, // private readonly spotRepository: Repository<SpotEntity>,
    @InjectRepository(SpotEntity)
    private readonly spotRepository: Repository<SpotEntity>, // private readonly spotRepository: Repository<SpotEntity>,
  ) {}

  createUser(user: User): Observable<User> {
    console.log('user in service', user);
    return from(this.userRepository.save(user));
  }

  findUser(userId: number): Observable<User> {
    return from(this.userRepository.findOneBy({ id: Number(userId) }));
  }

  async addSpotToUser(id?: number, spotId?: number): Promise<void> {
    const mySpot = Object.values(spotId)[0];
    const user = await this.userRepository.findOneBy({ id: Number(id) });
    const spot = await this.spotRepository.findOneBy({ id: mySpot });
    console.log(user);
    console.log(spot);
    user.spots = [spot];
    this.userRepository.save(user);
  }
}
