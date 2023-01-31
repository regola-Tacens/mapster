import { Controller, Post, Body } from '@nestjs/common';
import { Observable } from 'rxjs';
import { feedPost } from '../models/post.interface';
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}
  @Post()
  create(@Body() feedPost: feedPost): Observable<feedPost> {
    console.log('in controller', feedPost);
    return this.feedService.createPost(feedPost);
  }
}
