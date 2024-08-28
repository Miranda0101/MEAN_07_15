/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    userExists(username: string){
        // Todo: Connect to database and get response
        console.log("username: ", username)
        return false;
    }
}
