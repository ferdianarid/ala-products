import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './common/controllers/app.controller';
import { AppService } from './common/services/app.service';
import { UsersService } from './common/services/users.service';
import { UsersController } from './common/controllers/users.controller';
import { UsersModule } from './modules/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppMiddleware } from './common/middlewares/app.middleware';
import { config } from "../ormconfig"
import { Users } from './entity/users.entity';

require("dotenv/config")

@Module({
	imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([Users])],
	controllers: [AppController, UsersController],
	providers: [AppService, UsersService],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(AppMiddleware)
			.forRoutes('/')
	}
}


/*TypeOrmModule.forRoot({
		type: 'mysql',
		host: process.env.DB_HOST,
		port: 3306,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		autoLoadEntities: false,
		migrations: [
			"dist/src/database/migration/*.ts"
		],
		cli: {
			migrationsDir: "src/database/migration"
		},
		synchronize: false,
})*/