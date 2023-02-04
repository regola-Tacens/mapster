import { Spot } from 'src/spot/models/spot.interface';

export interface Tag {
  id?: number;
  title?: string;
  description?: string;
  color?: string;
  createdAt?: Date;
  spots?: Spot[];
}
