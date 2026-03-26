import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from './dto/register.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('new-user')
  create(@Body() RegisterDto: RegisterDto) {
    return this.usersService.create(RegisterDto, 'user');
  }

  @Post('new-admin')
  createAdmin(@Body() RegisterDto: RegisterDto) {
    return this.usersService.create(RegisterDto, 'admin');
  }
}
