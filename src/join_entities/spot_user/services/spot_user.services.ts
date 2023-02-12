import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { SpotEntity } from 'src/spot/models/spot.entity';
import { Spot } from 'src/spot/models/spot.interface';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { SpotUserEntity } from '../models/spot_user.entity';

@Injectable()
export class SpotUserService {
  // eslint-disable-next-line prettier/prettier
  constructor(
    @InjectRepository(SpotUserEntity)
    private readonly spotUserRepository: Repository<SpotUserEntity>,
    @InjectRepository(SpotEntity)
    private readonly spotRepository: Repository<SpotEntity>,
  ) {}

  async deletSpotFromUser(
    userId: number,
    spotId: { spotId: number },
  ): Promise<DeleteResult> {
    await this.spotUserRepository
      .createQueryBuilder('spot_user')
      .delete()
      .where('spot_user.user_id = :userId', { userId: userId })
      .andWhere('spot_user.spot_id = :spot', { spot: spotId.spotId })
      .execute();

    return null;
  }

  async findSpotsByUser(userId: number): Promise<Spot[]> {
    const spotsId = await this.spotRepository
      .createQueryBuilder('spot')
      .leftJoin(SpotUserEntity, 'spot_user', 'spot.id = spot_user.spot_id')
      .where('spot_user.user_id = :userId', { userId: userId })
      .getMany();

    return spotsId;
  }
}
