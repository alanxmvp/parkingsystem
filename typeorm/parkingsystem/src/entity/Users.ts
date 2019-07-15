import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ParkingLots } from "./ParkingLots";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @OneToMany(type => ParkingLots, parkinglot => parkinglot.users)
    parkinglots: ParkingLots[]

}
