import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import {parkingLotService} from '../parkinglot.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.css']
})
export class ParkingLotComponent implements OnInit {
  // parkingLotStatus = new FormGroup({
  //   status: new FormControl(0),
  //   location_id:new FormControl(1),
  //   user_id: new FormControl(1)
  // })
  parkingLots: ParkingLot[] = []
  locationId: number
  name : number;
  postData ={
    parkingLotId : (this.name),
    status : 0,
    locationId : 1,
    userId : 1
  }

  getParkingLotById(data){
    this.locationId = this.route.snapshot.params.locationId
    console.log("status:", data)
    this.service.getParkingLotById(data).subscribe(parkingLots=>{
      this.parkingLots = parkingLots as ParkingLot[]
      console.log(this.parkingLots)
    })
  }

  constructor(private service: parkingLotService, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  
  onSubmit(){
    const data = this.postData

    console.log(data);

    // const parkingLotsStatus = this.parkingLotStatus.value
    this.service.updateParkingLot(data)
  }
}
