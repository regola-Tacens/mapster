import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
