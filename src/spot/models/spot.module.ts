import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/models/user.entity';
import { SpotController } from '../controllers/spot.controller';
import { SpotService } from '../services/spot.services';
import { SpotEntity } from './spot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SpotEntity, UserEntity])],
  providers: [SpotService],
  controllers: [SpotController],
  exports: [TypeOrmModule.forFeature([UserEntity, SpotEntity])],
})
export class SpotModule {}
