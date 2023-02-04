import { TagEntity } from 'src/tag/models/tag/tag.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('spot')
export class SpotEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  adress: string;

  @Column({ default: '' })
  coordinates: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => TagEntity, (tag) => tag.spots)
  tag: TagEntity;
}
