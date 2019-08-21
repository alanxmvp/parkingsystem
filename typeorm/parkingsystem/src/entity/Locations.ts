import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ParkingLots } from "./ParkingLots";

@Entity()
export class Locations {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  total: number;

  @OneToMany(type => ParkingLots, parkinglot => parkinglot.location)
  parkinglots: ParkingLots[]

  @Column({nullable: true})
  available_count: number;
}
