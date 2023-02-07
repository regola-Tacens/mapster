import { Controller } from '@nestjs/common';
import { SpotUserService } from '../services/spot_user.services';

@Controller('spot_user')
export class SpotUserController {
  constructor(private spotUserService: SpotUserService) {}
}
