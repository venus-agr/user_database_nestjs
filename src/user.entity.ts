import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @Column()
    phone: string;

    @Column()
    DOB: Date;

    @Column()
    password: string;

    
    @Column()
    city: string;
}
