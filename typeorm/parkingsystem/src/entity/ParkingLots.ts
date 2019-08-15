import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Logs } from "./Logs";
import { Users } from "./Users";
import { Locations } from "./Locations";

@Entity()
export class ParkingLots {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Locations, location => location.parkinglots)
  @JoinColumn({ name: "location_id" })
  location: Locations;

  @Column()
  status: number;

  @Column({nullable: true})
  name: String;

  @ManyToOne(type => Users, user => user.parkinglots)
  @JoinColumn({ name: "user_id" })
  users: Users[]

  @OneToMany(type => Logs, log => log.parkinglot)
  logs: Logs[]

}
