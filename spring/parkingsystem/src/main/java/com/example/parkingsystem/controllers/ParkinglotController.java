
package com.example.parkingsystem.controllers;

import java.util.List;
import java.util.Optional;

import com.example.parkingsystem.entities.Parkinglot;
import com.example.parkingsystem.repositories.ParkinglotRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
public class ParkinglotController {

  @Autowired
  ParkinglotRepository parkingRepository;

  @PostMapping(value = "/parkinglot")
  public void addLot(@RequestBody Parkinglot parkinglot) {
    parkingRepository.save(parkinglot);
  }

  // not using
  @GetMapping(value = "/lotStatusByLocByStatus", produces = "application/json")
  public List<Parkinglot> displayAvailableByLocByStatus(@RequestParam Long locationId, @RequestParam Long status) {
    return parkingRepository.findByLocationIdAndStatus(locationId, status);
  }

  // not using
  @GetMapping(value = "/lotStatusByLoc", produces = "application/json")
  public List<Parkinglot> displayAvailableByLoc(@RequestParam Long locationId) {
    return parkingRepository.findByLocationId(locationId);
  }

  // get all parkinglot details
  @GetMapping(value ="/lotStatusAll", produces = "application/json")
  public List<Parkinglot> showAllParkingLot() {
    return parkingRepository.findAll();
  }

  // get parkinglot status by id
  @GetMapping(value ="/lotStatus/{id}", produces = "application/json")
  public Optional<Parkinglot> showParkingLot(@PathVariable long id) {
    return parkingRepository.findById(id);
  }

  // update parking lot status by id
  @PostMapping(value="/parkinglotUpdate/{id}")
  public void updateParkingLotNow(@RequestBody Parkinglot parkinglot, @PathVariable("id") long id){
    Parkinglot currentParkingLot = parkingRepository.findById(id).orElse(new Parkinglot());
    if(currentParkingLot != null){
      parkinglot.setId(id);
      parkingRepository.save(parkinglot);
    }
  }
}