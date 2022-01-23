import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from '../common/controllers/users.controller';
import { UsersService } from '../common/services/users.service';
import { Users } from "../entity/users.entity"
import { LoggerMiddleware } from 'src/common/middlewares/logger.middleware';

@Module({
       imports: [],
       controllers: [UsersController],
       providers: [UsersService]
})

export class UsersModule implements NestModule {
       configure(consumer: MiddlewareConsumer) {
              consumer
                     .apply(LoggerMiddleware)
                     .forRoutes({
                            path: "users",
                            method: RequestMethod.GET
                     });
       }
}