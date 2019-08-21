package com.example.parkingsystem.repositories;

import java.util.List;

import com.example.parkingsystem.entities.Parkinglot;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * UserRepository
 */
public interface ParkinglotRepository extends JpaRepository<Parkinglot, Long> {

  List<Parkinglot> findByLocationIdAndStatus(Long locationId, Long status);

  // @Query("Select size(p.status) from parking_lots p where location_id = ?1 and status = ?2")
  // List<Parkinglot> countStatusByLocationId(Long locationId, Long Status);

  // @Query(select a.label, count(a.id) as occupied, b.status from locations a inner join parking_lots b
  // on a.id = b.location_id
  // where b.status = 1 
  // group by a.id, a.label,b.status')

}