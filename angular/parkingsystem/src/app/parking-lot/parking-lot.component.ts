import { Component, OnInit } from '@angular/core';
import { parkingLotService } from '../parkinglot.service';
import { ActivatedRoute } from '@angular/router';

interface ParkingLot{
  id: number,
  status:number,
  location_id: number,
  user_id:number,
  name: string
}
interface ParkingLotRow1{
  id: number,
  status:number,
  location_id: number,
  user_id:number,
  name: string
}
interface ParkingLotRow2{
  id: number,
  status:number,
  location_id: number,
  user_id:number,
  name: string
}
interface ParkingLotRow3{
  id: number,
  status:number,
  location_id: number,
  user_id:number,
  name: string
}
interface ParkingLotRow4{
  id: number,
  status:number,
  location_id: number,
  user_id:number,
  name: string
}
interface ParkingLotRow5{
  id: number,
  status:number,
  location_id: number,
  user_id:number,
  name: string
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
  parkingLotRow1: ParkingLotRow1[] = []
  parkingLotRow2: ParkingLotRow2[] = []
  parkingLotRow3: ParkingLotRow3[] = []
  parkingLotRow4: ParkingLotRow4[] = []
  parkingLotRow5: ParkingLotRow5[] = []
  locationId: number
  parkingLotId: number 
  id: number
  postData ={
    parkingLotId : null,
    status : null,
    locationId : 1,
    userId : 1,
    name : null
  }

  postDataLocations ={
    id : null
  }

  constructor(private service: parkingLotService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getParkingLotAll().subscribe(parkingLots=>{
      this.parkingLots = parkingLots as ParkingLot[]
      // for(var i=0; i<this.parkingLots.length; i++){
      //   var current = this.parkingLots[i]; 
      //   console.log(current.location_id.toString().length);
      //   if(current.length>29){
      //     console.log(parkingLotRow1.push(current));
      //   }
      // }
      this.parkingLotRow1 = this.parkingLots.slice(0,-84);
      this.parkingLotRow2 = this.parkingLots.slice(29,-55);
      this.parkingLotRow3 = this.parkingLots.slice(58,-26);
      this.parkingLotRow4 = this.parkingLots.slice(87,-12);
      this.parkingLotRow5 = this.parkingLots.slice(-12);
      console.log(this.parkingLots)
      console.log(this.parkingLotRow1)
      console.log(this.parkingLotRow2)
      console.log(this.parkingLotRow3)
      console.log(this.parkingLotRow4)
      console.log(this.parkingLotRow5)
    }) 
  }
  
  onSubmit(event){
    var id = event.target.id;
    // get parking lot id
    var getParkingLocationId = getParkingId(id);
    this.postData.parkingLotId = parseInt(getParkingLocationId,10);  
    // get parking lot name
    var num = this.postData.parkingLotId - 1
    this.postData.name = this.parkingLots[num].name;
    this.postDataLocations.id=this.postData.locationId;
    if(this.parkingLots[num].status == 0){
      this.postData.status = 1;
      const data = this.postData
      this.service.updateParkingLot(data)
     // this.service.getLocationAvailableCount(this.postData.locationId, this.parkingLots[num].status)
      alert("Parking Lot "+ this.postData.name+ " is occupied!");
    }else{
      this.postData.status = 0;
      const data = this.postData
      this.service.updateParkingLot(data)
      //this.service.getLocationAvailableCount(this.postData.locationId, this.parkingLots[num].status)
      alert("Parking Lot "+ this.postData.name+ " is released!");
    }
    window.location.reload();
  }
   
  // checkReserved(id: number) {
  //   for (let lot of this.parkingLots) {
  //     if (id === lot.id && lot.status === 1) {
  //       return true
  //     } 
  //   }
  //   return false;
  // }
}
