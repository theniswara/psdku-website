package com.polinema.psdku.springbootbackend.repository;

import com.polinema.psdku.springbootbackend.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
    Admin findByUsername(String username);
}
