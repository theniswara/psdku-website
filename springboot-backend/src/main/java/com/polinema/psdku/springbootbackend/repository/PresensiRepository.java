package com.polinema.psdku.springbootbackend.repository;

import com.polinema.psdku.springbootbackend.model.Presensi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Optional;

@Repository
public interface PresensiRepository extends JpaRepository<Presensi, Integer> {
  Optional<Presensi> findByIdDosenAndTanggal(int idDosen, LocalDate tanggal);
}
