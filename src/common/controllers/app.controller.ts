import { Controller, Delete, Get, Post } from '@nestjs/common';
import { Users } from 'src/entity/users.entity';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) { }

	@Get()
	async getAllUsers(): Promise<Users[]> {
		return this.appService.getAllUsers()
	}
}
