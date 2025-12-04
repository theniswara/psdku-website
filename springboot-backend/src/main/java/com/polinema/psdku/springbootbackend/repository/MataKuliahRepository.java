package com.polinema.psdku.springbootbackend.repository;

import com.polinema.psdku.springbootbackend.model.MataKuliah;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface MataKuliahRepository extends JpaRepository<MataKuliah, Integer> {
  List<MataKuliah> findByDosenIdDosen(int idDosen);
}
