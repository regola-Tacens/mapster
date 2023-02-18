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
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [AuthService, userService, LocalStrategy, JwtStrategy],
  imports: [
    TypeOrmModule.forFeature([UserEntity, SpotEntity, SpotUserEntity]),
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        return {
          signOptions: {
            expiresIn: config.get<string>('JWT_EXPIRY'),
          },
          secret: config.get<string>('JWT_SECRET'),
        };
      },
      inject: [ConfigService],
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
