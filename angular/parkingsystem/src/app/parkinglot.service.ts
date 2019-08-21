import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

interface parkinglotStatus{
    id: number,
    status: number,
    location_id: number,
    user_id:number
}

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }

@Injectable({
    providedIn: 'root'
})

export class parkingLotService{
    parkingLot = new BehaviorSubject<parkinglotStatus[]>([])
    constructor(private http:HttpClient){}

    // homepage
    // get location details
    getLocations(){
        const url  = 'http://localhost:8080/api/locations'
        return this.http.get(url);
    }
    //parking lot
    //get all parkinglot
    getParkingLotAll(){
        const url = 'http://localhost:8080/api/lotStatusAll'
        return this.http.get(url);
    }

    // parking lot
    // update parkinglot status by id
    updateParkingLot(data){
        const updateurl = 'http://localhost:8080/api/parkinglotUpdate/' + data.parkingLotId 
        const params = data;
        console.log(updateurl)
        this.http.post(updateurl,params).toPromise().then(data =>{console.log(data);}); 
    }

    //parkinglot
    //update locations available count
    getLocationAvailableCount(id, status){
        const url = 'http://localhost:8080/api/lotStatusByLoc/' + id +'/' +status 
        return this.http.get(url);
    }

    //parking lot - not using
    // get parkinglot status by id
    getParkingLotById(parkingLotId){
        const url = 'http://localhost:8080/api/lotStatus/' + parkingLotId
        return this.http.get(url);
    }

    // not in use
    // get location status by id
    getLocationById(location_id){
        const url  = 'http://localhost:8080/api/locations?id =' + location_id
        return this.http.get(url);
    }

    // not in use
    occupiedLot(id, status,location_id,user_id){
        const url='http://localhost:8080/api/parkinglot?id =' + id
        const data = {status:status,location_id:location_id,user_id:user_id}
        return this.http.post(url,data);
    }
}