import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

export class parkingLotService{
    constructor(private http:HttpClient){}
    getLocations(){
        const url  = 'http://localhost:8080/api/locations'
        return this.http.get(url);
    }
    // testing
    getLocationById(location_id){
        const url  = 'http://localhost:8080/api/locations?id =' + location_id
        return this.http.get(url);
    }

    occupiedLot(id, status,location_id,user_id){
        const url='http://localhost:8080/api/parkinglot?id =' + id
        const data = {status:status,location_id:location_id,user_id:user_id}
        return this.http.post(url,data);
    }
}