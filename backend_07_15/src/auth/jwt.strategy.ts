/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    // Validate the jwt token in request header
    constructor(){
        super({
            secretOrKey: 'my_secret_key',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            
        })
    }

    async validate(payload: any){
        // find it in the database
        // check for user Role
        console.log(payload);
        if (payload.role != 'admin'){
            throw new UnauthorizedException();
        }
        return { username: payload.email, role: payload.role}
    }
}