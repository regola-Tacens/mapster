import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpotUserEntity } from 'src/join_entities/spot_user/models/spot_user.entity';
import { SpotEntity } from 'src/spot/models/spot.entity';
import { UserController } from '../controllers/user.controller';
import { userService } from '../services/user.service';
import { UserEntity } from './user.entity';
// import { TagEntity } from './tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, SpotEntity, SpotUserEntity])],
  providers: [userService],
  controllers: [UserController],
})
export class UserModule {}
