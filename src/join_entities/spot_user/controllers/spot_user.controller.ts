import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { SpotUserService } from '../services/spot_user.services';

@Controller('spot_user')
export class SpotUserController {
  constructor(private spotUserService: SpotUserService) {}

  @Get(':id')
  findSpotsByUser(@Param('id') id: number): any {
    return this.spotUserService.findSpotsByUser(id);
  }
}
