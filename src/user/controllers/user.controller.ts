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
import { User } from '../models/user.interface';
import { userService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: userService) {}
  @Post()
  create(@Body() user: User): Observable<User> {
    console.log('user in controller', user);
    return this.userService.createUser(user);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<User> {
    return this.userService.findUser(id);
  }

  @Put(':id')
  addSpot(@Param('id') id: number, @Body() spotId: number): any {
    return this.userService.addSpotToUser(id, spotId);
  }
}
