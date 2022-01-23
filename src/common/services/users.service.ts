import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from '../dto/users-create.dto';
import { Users } from '../../entity/users.entities';

@Injectable()
export class UsersService {
       private users: Users[] = [
              {
                     id: 22,
                     name: "Facebook Meta",
                     address: "Facebook provide a AR and VR"
              },
              {
                     id: 86,
                     name: "Mark Stall",
                     address: "Russia"
              },
              {
                     id: 75,
                     name: "Kevin Amarta",
                     address: "Singapore"
              },
              {
                     id: 122,
                     name: "Facebook Users",
                     address: "Silicon Valley"
              },
              {
                     id: 95,
                     name: "Ahmad Rozikin",
                     address: "Birmingham"
              }
       ]

       findAllUsers(name?: string): Users[] {
              if (name) {
                     return this.users.filter(user => user.name === name)
              }
              return this.users
       }

       findUsersById(usersId: number): Users {
              return this.users.find((user) => user.id === usersId)
       }

       createUsers(createUsers: CreateUsersDto): Users {
              // const RandomNumber = Math.floor(1000 + Math.random() * 9000)

              const UsersCreated = {
                     id: Date.now(),
                     // productID: RandomNumber,
                     ...createUsers
              }

              this.users.push(UsersCreated)
              return UsersCreated
       }

}