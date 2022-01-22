import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

require("dotenv/config")

const PortRunning = process.env.PORT_RUNNING

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(new ValidationPipe())

	const configs = new DocumentBuilder()
		.setTitle("ALA Product APIs")
		.setDescription("Application Programming Interface for ALA Product Showcase")
		.setVersion("1.0.0")
		.build()

	const documents = SwaggerModule.createDocument(app, configs)
	SwaggerModule.setup("/apis", app, documents)

	await app.listen(PortRunning);

	Logger.log(`Server Running on port ${PortRunning}`, "NestApplication")
}
bootstrap();
