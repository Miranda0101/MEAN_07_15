import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
// import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { UserInfoSchema } from './user.schema';

@Module({
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([
      { name: 'userInfo', schema: UserInfoSchema, collection: 'user' },
    ]),
  ],
  providers: [UserService],
})
export class UserModule {}
