package com.example.parkingsystem.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Question
 */
@Entity(name = "parking_lots")
public class Parkinglot {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "status")
  private Long status;

  @Column(name = "location_id")
  private Long locationId;

  @Column(name = "user_id")
  private Long userId;

  @Column (name ="name")
  private String name;

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getStatus() {
    return this.status;
  }

  public void setStatus(Long status) {
    this.status = status;
  }

  public Long getLocationId() {
    return this.locationId;
  }

  public void setLocationId(Long locationId) {
    this.locationId = locationId;
  }

  public Long getUserId() {
    return this.userId;
  }

  public void setUserId(Long userId) {
    this.userId = userId;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }
}
