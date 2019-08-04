import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Location {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  selectedValue: string;

    locations: Location[] = [
        {value: "firstWorld", viewValue: "First World"},
        {value: "secondWorld", viewValue: "Second World"},
        {value: "thirdWorld", viewValue: "Third World"}
      ];
    
  
 

  constructor() { }

  ngOnInit() {
  }

}
