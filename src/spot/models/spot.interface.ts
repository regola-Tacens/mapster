import { Tag } from 'src/tag/models/tag/tag.interface';

export interface Spot {
  id?: number;
  title?: string;
  description?: string;
  adress?: string;
  coordinates?: string;
  createdAt?: Date;
  tag?: Tag;
}
