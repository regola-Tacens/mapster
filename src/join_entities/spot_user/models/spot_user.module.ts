import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpotEntity } from 'src/spot/models/spot.entity';
import { SpotUserController } from '../controllers/spot_user.controller';
import { SpotUserService } from '../services/spot_user.services';
import { SpotUserEntity } from './spot_user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SpotUserEntity, SpotEntity])],
  providers: [SpotUserService],
  controllers: [SpotUserController],
})
export class SpotUserModule {}
