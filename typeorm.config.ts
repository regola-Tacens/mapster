import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { SpotEntity } from 'src/spot/models/spot.entity';
import { UserEntity } from 'src/user/models/user.entity';
import { FeedPostEntity } from 'src/feed/models/post.entity';
import { newmigration1676825820778 } from 'src/migration/1676825820778newmigration';

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DATABASE'),
  entities: [SpotEntity, UserEntity, FeedPostEntity],
  migrations: [newmigration1676825820778],
});
