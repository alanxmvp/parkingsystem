package com.example.parkingsystem.repositories;

import java.util.List;

import com.example.parkingsystem.entities.Parkinglot;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * UserRepository
 */
public interface ParkinglotRepository extends JpaRepository<Parkinglot, Long> {
  // List<User> findAllByEmail(String email);

  // List<User> findAllByFirstName(String firstName);

  // List<User> findAllByLastName(String lastName);

  // List<User> findAllByPhone(String phone);

  // List<User> findAllByFirstNameAndEmail(String firstName, String email);

}