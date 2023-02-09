import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Spot } from '../models/spot.interface';
import { SpotService } from '../services/spot.services';
import { UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { CreateSpotDto } from '../DTO/spot.dto';

@Controller('spot')
export class SpotController {
  constructor(private spotService: SpotService) {}
  @Post()
  @HttpCode(201)
  @UsePipes(new ValidationPipe())
  create(@Body() spot: CreateSpotDto): Observable<Spot> {
    return this.spotService.createSpot(spot);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<Spot> {
    console.log('id', id);
    return this.spotService.findOneSpot(id);
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

  @Get('tag/:id')
  findSpots(@Param('id') id: number): any {
    return this.spotService.findSpotsByTag(id);
  }
}
