/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
  controllers:[AuthController],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'my_secret_key', //configService or environment file

    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
