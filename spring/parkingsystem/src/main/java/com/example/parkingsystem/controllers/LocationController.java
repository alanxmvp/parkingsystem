
package com.example.parkingsystem.controllers;

import java.util.List;

import com.example.parkingsystem.entities.Location;
import com.example.parkingsystem.repositories.LocationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
public class LocationController {

  @Autowired
  LocationRepository locationRepository;

  @PostMapping(value = "/locations")
  public void addLocation(@RequestBody Location location) {
    locationRepository.save(location);
  }

  @GetMapping(value = "/locations", produces = "application/json")
  public List<Location> showLocationDetail(@PathVariable long id) {
    return locationRepository.findAllByLocationId(id);
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