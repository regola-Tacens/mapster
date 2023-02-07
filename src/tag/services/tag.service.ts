import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TagEntity } from '../models/tag/tag.entity';
import { Observable, from } from 'rxjs';
import { Tag } from '../models/tag/tag.interface';

@Injectable()
export class tagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
  ) {}

  createTag(tag: Tag): Observable<Tag> {
    return from(this.tagRepository.save(tag));
  }

  deleteTag(id: number): Observable<DeleteResult> {
    return from(this.tagRepository.delete(id));
  }

  updateTag(id: number, tag: Tag): Observable<UpdateResult> {
    return from(this.tagRepository.update(id, tag));
  }

  findAllTags(): Observable<Tag[]> {
    return from(this.tagRepository.find());
  }

  findOneTag(id: number): Observable<Tag> {
    return from(this.tagRepository.findOneBy({ id }));
  }
}
