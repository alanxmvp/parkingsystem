import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component'
import {ParkingLotComponent} from './parking-lot/parking-lot.component'
import {AdminComponent} from './admin/admin.component'

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'parkinglot', component: ParkingLotComponent},
  {path: 'admin', component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
