import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Tag } from '../models/tag/tag.interface';
import { tagService } from '../services/tag.service';
import { Observable } from 'rxjs';

@Controller('tag')
export class TagController {
  constructor(private tagsService: tagService) {}
  @Post()
  create(@Body() spot: Tag): Observable<Tag> {
    console.log('in controller', spot);
    return this.tagsService.createTag(spot);
  }
}
