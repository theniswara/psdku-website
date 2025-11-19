package com.polinema.psdku.springbootbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.polinema.psdku.springbootbackend.model.BidangKeahlian;

public interface BidangKeahlianRepository extends JpaRepository<BidangKeahlian, Integer> {
  List<BidangKeahlian> findByDosenIdDosen(int idDosen);
}
