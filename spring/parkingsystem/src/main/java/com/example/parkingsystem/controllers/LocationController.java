
package com.example.parkingsystem.controllers;

import java.util.List;
import java.util.Optional;

  import com.example.parkingsystem.entities.Location;
import com.example.parkingsystem.repositories.LocationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
public class LocationController {

  @Autowired
  LocationRepository locationRepository;

  // get location parking slot availability 
  @GetMapping(value = "/locations", produces = "application/json")
  public List<Location> showAllLocation() {
    return locationRepository.findAll();
  }

  //not using
  @GetMapping(value = "/locations/{id}", produces = "application/json")
  public Optional<Location> showLocationDetail(@PathVariable long id) {
    return locationRepository.findById(id);
  }

  // @GetMapping(value = "/users/{id}", produces = "application/json")
  // public User displayUser(@PathVariable long id) {
  // return userRepository.findById(id).orElse(new User());
  // }

  // // update
  // @PostMapping(value = "/users/{id}")
  // public void updateUser(@RequestBody User user, @PathVariable("id") long id) {
  // User existingUser = userRepository.findById(id).orElse(new User());
  // if (existingUser.getId() != null) {
  // user.setId(id);
  // userRepository.save(user);
  // }
  // ;
  // }

  // @DeleteMapping(value = "/users/{id}")
  // public void deleteUser(@PathVariable("id") long id) {
  // User user = userRepository.findById(id).orElse(new User());
  // userRepository.delete(user);
  // }

}