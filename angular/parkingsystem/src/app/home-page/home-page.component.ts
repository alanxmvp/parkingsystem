import { Component, OnInit } from '@angular/core';
import {parkingLotService} from '../parkinglot.service';
import { ActivatedRoute } from '@angular/router';

interface HomePage{
  id: number,
  label: String,
  total: number
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  homepages: HomePage[] = []
  locationId: number

  constructor(private service:parkingLotService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.locationId = this.route.snapshot.params.locationId
    this.service.getLocations().subscribe(homepages=>{
      this.homepages = homepages as HomePage[]
      console.log(this.homepages)
    })
  }

  // getLocationById(location_id){
  //   this.service.getLocationById(location_id).subscribe(homepages => {
  //     this.homepages = homepages as HomePage[]
  //   })
  // }

}
