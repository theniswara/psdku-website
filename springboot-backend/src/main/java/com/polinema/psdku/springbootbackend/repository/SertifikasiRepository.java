package com.polinema.psdku.springbootbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.polinema.psdku.springbootbackend.model.Sertifikasi;

public interface SertifikasiRepository extends JpaRepository<Sertifikasi, Integer> {
  List<Sertifikasi> findByDosenIdDosen(int idDosen);
}
