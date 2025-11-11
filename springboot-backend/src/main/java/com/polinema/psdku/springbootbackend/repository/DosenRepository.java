package com.polinema.psdku.springbootbackend.repository;

import com.polinema.psdku.springbootbackend.model.Dosen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DosenRepository extends JpaRepository<Dosen, Integer>{
  
}
