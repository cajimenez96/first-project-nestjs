import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {
    this.usersService = usersService;
  }

  @Get('/users')
  getAllUsers() {
    return this.usersService.getAll();
  }

  @Post('/user')
  createUser(@Body() body: { name: string; email: string }) {
    return this.usersService.create(body);
  }
}
