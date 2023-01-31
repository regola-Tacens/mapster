import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpotController } from '../controllers/spot.controller';
import { SpotService } from '../services/spot.services';
import { SpotEntity } from './spot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SpotEntity])],
  providers: [SpotService],
  controllers: [SpotController],
})
export class SpotModule {}
