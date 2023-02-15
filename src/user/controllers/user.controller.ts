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
import { UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import {
  AddSpotToUSerDto,
  CreateUserDto,
  updateUserDto,
} from '../DTO/user.dto';
import { User } from '../models/user.interface';
import { userService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: userService) {}
  @Post()
  @HttpCode(201)
  @UsePipes(new ValidationPipe())
  create(@Body() user: CreateUserDto): Observable<User> {
    return this.userService.createUser(user);
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: number): Observable<User> {
    return this.userService.findUser(id);
  }

  @Get('/email/:id')
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  findOneByEmail(@Body() email: { email: string }): Observable<User> {
    console.log('email', email);
    return this.userService.findUserByEmail(email);
  }

  @Post('/username')
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  findOneByUsername(@Body() body: { lastname: string }): Observable<User> {
    const { lastname } = body;
    return this.userService.findUserByuserName(lastname);
  }

  @Put('/spot_user/:id')
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  addSpot(@Param('id') id: number, @Body() spotId: AddSpotToUSerDto): any {
    return this.userService.addSpotToUser(id, spotId);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.userService.deleteUser(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  update(
    @Param('id') id: number,
    @Body() user: updateUserDto,
  ): Observable<UpdateResult> {
    return this.userService.updateUser(id, user);
  }
}
