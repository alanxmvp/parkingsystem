import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component'
import {ParkingLotComponent} from './parking-lot/parking-lot.component'

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'parkinglot', component: ParkingLotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
