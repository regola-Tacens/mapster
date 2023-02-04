import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../controllers/user.controller';
import { userService } from '../services/user.service';
import { UserEntity } from './user.entity';
// import { TagEntity } from './tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [userService],
  controllers: [UserController],
})
export class UserModule {}
