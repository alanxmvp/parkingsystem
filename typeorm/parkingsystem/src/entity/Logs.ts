import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ParkingLots } from "./ParkingLots";

@Entity()
export class Logs {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  datetime_Created: Date;

  @ManyToOne(type => ParkingLots, parkinglot => parkinglot.logs)
  @JoinColumn({ name: "lot_id" })
  parkinglot: ParkingLots[]

  @Column()
  status: number;

}
