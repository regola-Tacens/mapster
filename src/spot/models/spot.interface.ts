import { Tag } from 'src/tag/models/tag/tag.interface';
import { User } from 'src/user/models/user.interface';

export interface Spot {
  id?: number;
  title?: string;
  description?: string;
  adress?: string;
  coordinates?: string;
  createdAt?: Date;
  tagId?: number;
  users: User[];
}
