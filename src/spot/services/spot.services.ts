import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { SpotEntity } from '../models/spot.entity';
import { Spot } from '../models/spot.interface';

@Injectable()
export class SpotService {
  // eslint-disable-next-line prettier/prettier
  constructor(
    @InjectRepository(SpotEntity)
    private readonly spotRepository: Repository<SpotEntity>,
  ) {}

  createSpot(spot: Spot): Observable<Spot> {
    console.log('feedPost', spot);
    return from(this.spotRepository.save(spot));
  }

  findAllSpots(): Observable<Spot[]> {
    return from(this.spotRepository.find());
  }

  updateSpot(id: number, spot: Spot): Observable<UpdateResult> {
    return from(this.spotRepository.update(id, spot));
  }

  deleteSpot(id: number): Observable<DeleteResult> {
    return from(this.spotRepository.delete(id));
  }
}
