import { SpotEntity } from 'src/spot/models/spot.entity';
import { Spot } from 'src/spot/models/spot.interface';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  first_name: string;

  @Column({ default: '' })
  last_name: string;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  adress: string;

  @Column({ default: '' })
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToMany(() => SpotEntity, (spot) => spot.users)
  @JoinTable({
    name: 'spot_user',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'spot_id',
      referencedColumnName: 'id',
    },
  })
  spots: Spot[];
}
