import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Observable, from } from 'rxjs';
import { User } from '../models/user.interface';
import { UserEntity } from '../models/user.entity';
import { SpotEntity } from 'src/spot/models/spot.entity';
import { SpotUserEntity } from 'src/join_entities/spot_user/models/spot_user.entity';

@Injectable()
export class userService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>, // private readonly spotRepository: Repository<SpotEntity>,
    @InjectRepository(SpotEntity)
    private readonly spotRepository: Repository<SpotEntity>,
    @InjectRepository(SpotUserEntity)
    private readonly spotUSerRepository: Repository<SpotUserEntity>, // private readonly spotRepository: Repository<SpotEntity>,
  ) {}

  createUser(user: User): Observable<User> {
    return from(this.userRepository.save(user));
  }

  findUser(userId: number): Observable<User> {
    return from(this.userRepository.findOneBy({ id: Number(userId) }));
  }

  deleteUser(userId: number): Observable<DeleteResult> {
    return from(this.userRepository.delete(userId));
  }

  updateUser(userId: number, user: User): Observable<UpdateResult> {
    return from(this.userRepository.update(userId, user));
  }

  async addSpotToUser(id?: number, spotId?: number): Promise<void> {
    const mySpot = Object.values(spotId)[0];
    const user = await this.userRepository.findOneBy({ id: Number(id) });
    const spot = await this.spotRepository.findOneBy({ id: mySpot });
    const allSpotsIds = await this.spotUSerRepository.find({
      where: { user_id: id },
    });
    const fetchedSpots = [];
    for (const spotId of allSpotsIds) {
      const fetchedSpot = await this.spotRepository.findOneBy({
        id: spotId.spot_id,
      });
      fetchedSpots.push(fetchedSpot);
    }
    user.spots = [...fetchedSpots, spot];
    this.userRepository.save(user);
  }
}
