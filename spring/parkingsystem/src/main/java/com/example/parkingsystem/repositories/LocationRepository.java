package com.example.parkingsystem.repositories;

import java.util.List;

import com.example.parkingsystem.entities.Location;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * UserRepository
 */
public interface LocationRepository extends JpaRepository<Location, Long> {

  // @Query("update parking_lots pl set pl.available_count = (select COUNT(pl2.status) from parking_lots pl2 where pl.2status = 0) where pl.id =?1")
  // List<Location> setAvalilableCount(int id);

  // List<Location> findAllByLocation_Id(long id);

  // List<User> findAllByLastName(String lastName);

  // List<User> findAllByPhone(String phone);

  // List<User> findAllByFirstNameAndEmail(String firstName, String email);
}