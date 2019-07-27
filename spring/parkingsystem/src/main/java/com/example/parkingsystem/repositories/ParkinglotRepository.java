package com.example.parkingsystem.repositories;

import java.util.List;

import com.example.parkingsystem.entities.Parkinglot;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * UserRepository
 */
public interface ParkinglotRepository extends JpaRepository<Parkinglot, Long> {

  List<Parkinglot> findByLocationIdAndStatus(Long locationId, Long status);

  List<Parkinglot> findByLocationId(Long locationId);

  // @Query(select a.label, count(a.id) as occupied, b.status from locations a inner join parking_lots b
  // on a.id = b.location_id
  // where b.status = 1 
  // group by a.id, a.label,b.status')

}