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
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('tag')
export class TagController {
  constructor(private tagsService: tagService) {}

  @Post()
  create(@Body() spot: Tag): Observable<Tag> {
    return this.tagsService.createTag(spot);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.tagsService.deleteTag(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() tag: Tag): Observable<UpdateResult> {
    return this.tagsService.updateTag(id, tag);
  }

  @Get()
  findAll(): Observable<Tag[]> {
    return this.tagsService.findAllTags();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tagsService.findOneTag(id);
  }
}
