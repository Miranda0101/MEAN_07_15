/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// import mongoose from "mongoose";


// export const UserSchema = new mongoose.Schema({
//     username: String,
//     password: String,
//     email: String,
// })

// use TypeScript Class to define Schema
@Schema()
export class UserInfo {
    @Prop({required: true}) name: string;
    @Prop() age: number;
    @Prop() email: string;
    // @Prop([String]) post: string[];
}
// convert into Mongoose Schema
export const UserInfoSchema = SchemaFactory.createForClass(UserInfo);