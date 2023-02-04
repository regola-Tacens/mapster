import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpotEntity } from 'src/spot/models/spot.entity';
import { TagController } from 'src/tag/controllers/tag.controller';
import { tagService } from 'src/tag/services/tag.service';
import { TagEntity } from './tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SpotEntity, TagEntity])],
  providers: [tagService],
  controllers: [TagController],
})
export class TagModule {}
