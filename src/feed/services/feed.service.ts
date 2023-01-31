import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { Repository } from 'typeorm';
import { FeedPostEntity } from '../models/post.entity';
import { feedPost } from '../models/post.interface';

@Injectable()
export class FeedService {
  // eslint-disable-next-line prettier/prettier
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedRepository: Repository<FeedPostEntity>,
  ) {}

  createPost(feedPost: feedPost): Observable<feedPost> {
    console.log('feedPost', feedPost);
    return from(this.feedRepository.save(feedPost));
  }
}
