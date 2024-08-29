/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInfo } from './user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel('userInfo') private userModel: Model<UserInfo>){}
    userExists(username: string){
        // Todo: Connect to database and get response
        console.log("username: ", username)
        return false;
    }
    // Get data from the database
   async getAllUserInfo(){  
        const result = await this.userModel.find().exec();
        return result;
    }

    // create new user
    createNewUser(newUser: any){
        const user = new this.userModel(newUser);
        console.log(user);
        return user.save();
    }

    // get one user
    getUserByName(username: string){
        return this.userModel.find({name: {$gte: username}}).exec();
    }
}
