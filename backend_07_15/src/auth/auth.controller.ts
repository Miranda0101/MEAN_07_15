/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // Request Body
  @Post('login')
  userLogin(@Body() body: any) {
    // console.log(body);
    // @Req @Res()
    return this.authService.userLogin(body);
  }
}
