import { ApiProperty } from "@nestjs/swagger"
import { MaxLength, MinLength } from "class-validator"

export class CreateUsersDto {
       @ApiProperty()
       id: number

       @ApiProperty()
       @MinLength(10)
       @MaxLength(30)
       name: string

       @ApiProperty()
       @MaxLength(250)
       address: string
}