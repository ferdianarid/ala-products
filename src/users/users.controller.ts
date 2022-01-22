import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUsersDto } from './dto/users-create.dto';
import { Users } from './entity/users.entities';
import { UsersService } from "./users.service"

@ApiTags("Users")
@Controller('users')
export class UsersController {
       constructor(private usersServices: UsersService) { }

       @ApiOkResponse({ type: Users, isArray: true })

       @ApiQuery({ name: 'name', required: false })
       @Get()
       getUsers(@Query("name") name?: string): Users[] {
              return this.usersServices.findAllUsers(name)
       }

       @ApiOkResponse({ type: Users, description: "Selected Users" })

       @ApiNotFoundResponse()
       @Get(":id")
       getUsersById(@Param("id", ParseIntPipe) id: number): Users {
              const SelectedUsers = this.usersServices.findUsersById(id)

              if (!SelectedUsers) {
                     throw new NotFoundException()
              }

              return SelectedUsers
       }

       @ApiCreatedResponse({ type: Users })
       @Post()
       createUsers(@Body() body: CreateUsersDto): Users {
              return this.usersServices.createUsers(body)
       }
}