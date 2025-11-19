package com.polinema.psdku.springbootbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.polinema.psdku.springbootbackend.model.LinkEksternal;

public interface LinkEksternalRepository extends JpaRepository<LinkEksternal, Integer> {
  List<LinkEksternal> findByDosenIdDosen(int idDosen);
}
