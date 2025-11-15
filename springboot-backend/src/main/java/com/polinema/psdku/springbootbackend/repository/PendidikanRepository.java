package com.polinema.psdku.springbootbackend.repository;

import com.polinema.psdku.springbootbackend.model.Pendidikan;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface PendidikanRepository extends JpaRepository<Pendidikan, Integer> {
   List<Pendidikan> findByDosenIdDosen(int idDosen);
}
