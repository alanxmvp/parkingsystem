package com.example.parkingsystem.repositories;

import java.util.List;

import com.example.parkingsystem.entities.Parkinglot;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * UserRepository
 */
public interface ParkinglotRepository extends JpaRepository<Parkinglot, Long> {

  List<Parkinglot> findByLocationidAndStatus(Long locationId, Long status);

  List<Parkinglot> findByLocationId(Long locationId);

}