import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedModule } from './feed/feed.module';
import { SpotModule } from './spot/models/spot.module';
import { TagModule } from './tag/models/tag/tag.module';
import { UserModule } from './user/models/user.module';
import { SpotUserModule } from './join_entities/spot_user/models/spot_user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guards';
import configuration from './config/configuration';
import DatabaseModule from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    FeedModule,
    SpotModule,
    DatabaseModule,
    TagModule,
    UserModule,
    SpotUserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
