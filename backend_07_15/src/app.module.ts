import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    ProductModule,
    MongooseModule.forRoot(
      // <username>: <password>@address/databaseName?options
      'mongodb+srv://miranda:RdrFYrUzpE0X6hxk@cluster0.guc26.mongodb.net/blog?retryWrites=true&w=majority',
      // { dbName: 'blog' },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
