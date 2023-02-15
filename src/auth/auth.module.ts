import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpotUserEntity } from 'src/join_entities/spot_user/models/spot_user.entity';
import { SpotEntity } from 'src/spot/models/spot.entity';
import { UserEntity } from 'src/user/models/user.entity';
import { UserModule } from 'src/user/models/user.module';
import { userService } from 'src/user/services/user.service';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  providers: [AuthService, userService, LocalStrategy],
  imports: [
    TypeOrmModule.forFeature([UserEntity, SpotEntity, SpotUserEntity]),
    UserModule,
    PassportModule,
  ],
})
export class AuthModule {}
