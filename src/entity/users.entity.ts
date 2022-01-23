import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./products.entity";

@Entity()
export class Users {
       @PrimaryGeneratedColumn()
       id: number

       @Column()
       name: string

       @OneToMany(type => Product, product => product.customer)
       products: Product[]

       @Column()
       email: string

       @Column()
       phone: string

       @Column()
       address: string

       @Column()
       hobby: string
}