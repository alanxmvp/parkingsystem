import { TestBed } from '@angular/core/testing';
import { parkingLotService } from './parkinglot.service';

describe('parkingLotService', ()=> {
    beforeEach(()=> TestBed.configureTestingModule({}));

    it('should be created', ()=>{
        const service: parkingLotService=TestBed.get(parkingLotService);
        expect(service).toBeTruthy;
    });
});