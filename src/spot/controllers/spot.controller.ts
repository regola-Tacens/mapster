import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Spot } from '../models/spot.interface';
import { SpotService } from '../services/spot.services';

@Controller('spot')
export class SpotController {
  constructor(private spotService: SpotService) {}
  @Post()
  create(@Body() spot: Spot): Observable<Spot> {
    console.log('in controller', spot);
    return this.spotService.createSpot(spot);
  }

  @Get()
  findAll(): Observable<Spot[]> {
    return this.spotService.findAllSpots();
  }

  @Put(':id')
  update(
    @Body() spot: Spot,
    @Param('id') id: number,
  ): Observable<UpdateResult> {
    return this.spotService.updateSpot(id, spot);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.spotService.deleteSpot(id);
  }
}
