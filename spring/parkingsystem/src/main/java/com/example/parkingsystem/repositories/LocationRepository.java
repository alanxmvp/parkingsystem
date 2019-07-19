package com.example.parkingsystem.repositories;

import com.example.parkingsystem.entities.Location;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * UserRepository
 */
public interface LocationRepository extends JpaRepository<Location, Long> {

  // List<Location> findAllByLocation_Id(long id);

  // List<User> findAllByLastName(String lastName);

  // List<User> findAllByPhone(String phone);

  // List<User> findAllByFirstNameAndEmail(String firstName, String email);

}