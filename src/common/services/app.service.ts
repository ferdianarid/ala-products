import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entity/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
	// defining an constructor
	constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) { }

	// get all users
	getAllUsers(): Promise<Users[]> {
		return this.usersRepository.find({
			relations: ["products"]
		})
	}

	// get a specify users by id
	async getUsersById(id: number): Promise<Users> {
		try {
			const user = await this.usersRepository.findOneOrFail(id)
			return user
		} catch (error) {
			throw error
		}
	}

	// create users
	createUsers(name: string, email: string, phone: string, address: string, hobby: string): Promise<Users> {
		const newUsers = this.usersRepository.create({
			name, email, phone, address, hobby
		})
		return this.usersRepository.save(newUsers)
	}

	// update users
	async updateUsers(id: number, name?: string, email?: string, phone?: string, address?: string, hobby?: string): Promise<Users> {
		const user = await this.getUsersById(id)

		user.name = name
		user.email = email
		user.address = address
		user.phone = phone
		user.hobby = hobby

		return this.usersRepository.save(user)
	}

	// delete users
	async deleteUsers(id: number): Promise<Users> {
		const user = await this.getUsersById(id)

		return this.usersRepository.remove(user)
	}
}
