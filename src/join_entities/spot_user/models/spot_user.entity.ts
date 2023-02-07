import { SpotEntity } from 'src/spot/models/spot.entity';
import { Spot } from 'src/spot/models/spot.interface';
import { UserEntity } from 'src/user/models/user.entity';
import { User } from 'src/user/models/user.interface';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('spot_user')
export class SpotUserEntity {
  @PrimaryColumn({ name: 'user_id' })
  user_id: number;

  @PrimaryColumn({ name: 'spot_id' })
  spot_id: number;

  @ManyToOne(() => UserEntity, (user) => user.spots, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  users: User[];

  @ManyToOne(() => SpotEntity, (spot) => spot.users, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'spot_id', referencedColumnName: 'id' }])
  spots: Spot[];
}
