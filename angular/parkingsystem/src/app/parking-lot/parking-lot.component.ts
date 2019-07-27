import { Component, OnInit } from '@angular/core';
import {parkingLotService} from '../parkinglot.service';

@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.css']
})
export class ParkingLotComponent implements OnInit {
  parkinglots: ParkingLot[]=[];

  constructor(private service: parkingLotService) { }

  ngOnInit() {
  }

  onSubmit(id,status,location_id,user_id){
    this.service.occupiedLot(id,status,location_id,user_id).subscribe(parkinglot => {this.parkinglots.push(parkinglot as ParkingLot)})
  }
}
