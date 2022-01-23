import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./users.entity";

@Entity()
export class Product {
       @PrimaryGeneratedColumn()
       id: number

       @ManyToOne(type => Users, user => user.products)
       customer: Users

       @Column()
       title: string

       @Column()
       description: string

       @Column()
       quantity: number

       @Column()
       price: number
}