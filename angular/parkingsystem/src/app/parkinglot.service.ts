import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';


const baseUrl = 'api url'

const httpOptions ={
    headers: new HttpHeaders({
        'Content-Type': 'aplication/json',
    }),
}

interface parkingLot{
    id : number
    location_id: number
    status: number
    user_id: number
}

@Injectable({
    providedIn:'root',
})

export class parkingLotService{
    parkingLots = new BehaviorSubject<parkingLot[]>([])
    
    constructor(private http: HttpClient){
        this.http.get(`${baseUrl}/parkingLots`).subscribe((response:any[]) => {
            let formattedParkingLot =[]
            for (let parkingLot of response){
                formattedParkingLot.push({
                    id:parkingLot.id,
                    location_id:parkingLot.location_id,
                    status: parkingLot.status,
                    user_id: parkingLot.user_id
                })
            }
            this.parkingLots.next(formattedParkingLot)
        })
    }

    getParkingLots(){
        return this.parkingLots
    }

    
}