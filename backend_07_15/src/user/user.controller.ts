/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  // http://localhost:3000/user/usernam-exists
  // Path Parameter
  @Get('username-exists/:user')
  async checkUsernameExists(@Param('user') username: string) {
    // const userExist = this.userService.userExists(username);
    let user;
    await this.userService.getUserByName(username).then((res)=>
      user = res);
    if (user) {
      throw new HttpException('Username already exists', HttpStatus.CONFLICT);
    } else {
      return 'Username is available';
    }
  }

  // Query parameter
  @Get('all')
  async getAllUsers(@Query('sortBy') sorting: string, @Query('filter') filter: string){
    console.log(`sort by ${sorting}, filtered with ${filter}`);
    return await this.userService.getAllUserInfo().then((data)=>console.log(data));
  }

  // Request Body
  @Post('login')
  userLogin(@Body() body: any){
    console.log(body);
    // @Req @Res()
  }

  // create new user
  @Post('new')
  async userRegister(@Body() newUser: any){
    return await this.userService.createNewUser(newUser);
  }

}
