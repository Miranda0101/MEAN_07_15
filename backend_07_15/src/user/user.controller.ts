/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, HttpException, HttpStatus, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  // http://localhost:3000/user/usernam-exists
  // Path Parameter
  @Get('username-exists/:user')
  checkUsernameExists(@Param('user') username: string) {
    const userExist = this.userService.userExists(username);
    if (userExist) {
      throw new HttpException('Username already exists', HttpStatus.CONFLICT);
    } else {
      return 'Username is available';
    }
  }

  // Query parameter
  @Get('all')
  getAllUsers(@Query('sortBy') sorting: string, @Query('filter') filter: string){
    console.log(`sort by ${sorting}, filtered with ${filter}`);
    return 'Get all users and sort';
  }
}
