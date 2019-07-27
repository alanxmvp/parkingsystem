
package com.example.parkingsystem.controllers;

import java.util.List;

import com.example.parkingsystem.entities.Parkinglot;
import com.example.parkingsystem.repositories.ParkinglotRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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

  @GetMapping(value = "/lotStatusByLocByStatus", produces = "application/json")
  public List<Parkinglot> displayAvailableByLocByStatus(@RequestParam Long locationId, @RequestParam Long status) {
    return parkingRepository.findByLocationIdAndStatus(locationId, status);
  }

  @GetMapping(value = "/lotStatusByLoc", produces = "application/json")
  public List<Parkinglot> displayAvailableByLoc(@RequestParam Long locationId) {
    return parkingRepository.findByLocationId(locationId);
  }

}