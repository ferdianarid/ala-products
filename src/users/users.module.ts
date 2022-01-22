import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
       imports: [TypeOrmModule.forRoot({
              type: 'mysql',
              host: 'localhost',
              port: 3306,
              username: 'root',
              password: '',
              database: 'alaproduct',
              entities: [],
              synchronize: true,
       })],
       controllers: [UsersController],
       providers: [UsersService]
})
export class UsersModule { }
