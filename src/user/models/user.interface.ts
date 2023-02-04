// import { Spot } from 'src/spot/models/spot.interface';

export interface User {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  adress?: string;
  createdAt?: Date;
  // spots?: Spot[];
}
