import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import {parkingLotService} from '../parkinglot.service';

@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.css']
})
export class ParkingLotComponent implements OnInit {
  parkingLotStatus = new FormGroup({

  })
  constructor(private service: parkingLotService) { }

  ngOnInit() {
  }
  
  onSubmit(){
    const parkingLotsStatus = this.parkingLotStatus.value
    // this.service.updateParkingLot(parkingLotsStatus)
  }
}
