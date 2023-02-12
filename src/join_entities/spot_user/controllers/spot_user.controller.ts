import { Controller, Get } from '@nestjs/common';
import { Param, Body, Delete } from '@nestjs/common/decorators';
import { DeleteResult } from 'typeorm';
import { SpotUserService } from '../services/spot_user.services';

@Controller('spot_user')
export class SpotUserController {
  constructor(private spotUserService: SpotUserService) {}

  @Get(':id')
  findSpotsByUser(@Param('id') id: number): any {
    return this.spotUserService.findSpotsByUser(id);
  }

  @Delete(':id')
  deleteSpotFromUser(
    @Param('id') id: number,
    @Body() spotId: { spotId: number },
  ): Promise<DeleteResult> {
    return this.spotUserService.deletSpotFromUser(id, spotId);
  }
}
