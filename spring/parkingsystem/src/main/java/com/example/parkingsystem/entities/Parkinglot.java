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
  private Long location_id;

  @Column(name = "user_id")
  private Long user_id;

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

  public Long getLocation_id() {
    return this.location_id;
  }

  public void setLocation_id(Long location_id) {
    this.location_id = location_id;
  }

  public Long getUser_id() {
    return this.user_id;
  }

  public void setUser_id(Long user_id) {
    this.user_id = user_id;
  }
}
