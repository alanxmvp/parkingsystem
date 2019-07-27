import { Component, OnInit } from '@angular/core';
import {parkingLotService} from '../parkinglot.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  homepages: HomePage[] = []

  constructor(private service:parkingLotService) { }

  ngOnInit() {
    this.service.getLocations().subscribe(homepages=>{
      this.homepages = homepages as HomePage[]
      console.log(this.homepages)
    })
  }

  getLocationById(location_id){
    this.service.getLocationById(location_id).subscribe(homepages => {
      this.homepages = homepages as HomePage[]
    })
  }

}
