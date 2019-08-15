import { Component, OnInit } from '@angular/core';
import { parkingLotService } from '../parkinglot.service';
import { ActivatedRoute } from '@angular/router';

interface ParkingLot{
  id: number,
  status:number,
  location_id: number,
  user_id:number
}

function getParkingId(id){
  var parkingLotIds = document.getElementById(id).getAttribute("data-id");
  return parkingLotIds;
}

@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.css']
})

export class ParkingLotComponent implements OnInit {
  parkingLots: ParkingLot[] = []
  locationId: number
  parkingLotId: number 
  id: number
  postData ={
    parkingLotId : null,
    status : 0,
    locationId : 1,
    userId : 1
  }

  constructor(private service: parkingLotService, private route: ActivatedRoute) { }

  // work in progress (get status of the parking slot)
  getParkingLotById(data){
    // this.locationId = this.route.snapshot.params.locationId
    console.log("status :", data)
    this.service.getParkingLotById(data).subscribe(parkingLots=>{
      this.parkingLots = parkingLots as ParkingLot[]
      console.log(this.parkingLots)
    })
  }

  ngOnInit() {
    // this.parkingLotId = this.route.snapshot.params.locationId
    this.service.getParkingLotAll().subscribe(parkingLots=>{
      this.parkingLots = parkingLots as ParkingLot[]
      console.log(this.parkingLots)
    })
  }
  
  onSubmit(event){
    var id = event.target.id;
    var getParkingLocationId = getParkingId(id);
    this.postData.parkingLotId = parseInt(getParkingLocationId,10);  
    // console.log("ID : " + this.postData.parkingLotId);
    const data = this.postData
    console.log(data);
    this.service.updateParkingLot(data)
    alert("Request completed!");
  }
}
