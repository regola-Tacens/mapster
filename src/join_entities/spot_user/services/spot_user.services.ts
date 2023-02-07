import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { SpotUserEntity } from '../models/spot_user.entity';

@Injectable()
export class SpotUserService {
  // eslint-disable-next-line prettier/prettier
  constructor(
    @InjectRepository(SpotUserEntity)
    private readonly spotUserRepository: Repository<SpotUserEntity>,
  ) {}

  deletSpotFromUser(spotId: number, userId: number): any {
    const spot = this.spotUserRepository.findOne({
      where: { spot_id: spotId, user_id: userId },
    });
    console.log('spot', spot);
    // return from(this.spotRepository.delete(spot));
  }
}
