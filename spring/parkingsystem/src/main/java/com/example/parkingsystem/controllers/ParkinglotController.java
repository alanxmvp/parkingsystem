
package com.example.parkingsystem.controllers;

import java.util.List;

import com.example.parkingsystem.entities.Parkinglot;
import com.example.parkingsystem.repositories.ParkinglotRepository;

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
public class ParkinglotController {

  @Autowired
  ParkinglotRepository parkingRepository;

  @PostMapping(value = "/parkinglot")
  public void addLot(@RequestBody Parkinglot parkinglot) {
    parkingRepository.save(parkinglot);
  }

  // @GetMapping(value = "/users", produces = "application/json")
  // public List<User> displayUsers(@RequestParam String firstName, @RequestParam
  // String email) {
  // return userRepository.findAllByFirstNameAndEmail(firstName, email);
  // }

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