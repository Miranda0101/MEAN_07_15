/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService){}

    // Authenticate users crendentials
    // DTO
    async validateUser(email: string, pass: string) {
        // Todo: check whether the user exists
        // Todo: Check whether passwords match with database
        return {email: email, role: 'admin'};
    }
    // Todo: signin dto
    // generate JWT token after validation
    async userLogin(user: any){
        const result = await this.validateUser(user.email, user.password);
        const payload = {username: user.email, role: result.role}; 
        console.log(payload);
        return { access_token: this.jwtService.sign(payload)};
    }
}
