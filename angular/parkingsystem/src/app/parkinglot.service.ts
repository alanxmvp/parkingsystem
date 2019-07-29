import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

interface parkinglotStatus{
    id: number,
    status: number,
    location_id: number,
    user_id:number
}
@Injectable({
    providedIn: 'root'
})

export class parkingLotService{
    parkingLot = new BehaviorSubject<parkinglotStatus[]>([])
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
    
    updateParkingLot(parkingLotid, parkingLotInfo){
        const parkingLotValue = this.parkingLot.getValue()
        let tempParkingLots = []
        for(let tempParkingLot of parkingLotValue){
            if (tempParkingLot.id === parkingLotid){
                tempParkingLot.status = parkingLotInfo.status
                tempParkingLot.location_id = parkingLotInfo.location_id
                tempParkingLot.user_id = parkingLotInfo.user_id
            }
            tempParkingLots.push(tempParkingLot)
        }
        this.parkingLot.next(tempParkingLots)
    }
}