import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Spot } from 'src/spot/models/spot.interface';
import { Repository } from 'typeorm';
import { TagEntity } from '../models/tag/tag.entity';
import { Observable, from } from 'rxjs';
import { Tag } from '../models/tag/tag.interface';

@Injectable()
export class tagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
  ) {}

  createTag(tag: Tag): Observable<Spot> {
    return from(this.tagRepository.save(tag));
  }
}
