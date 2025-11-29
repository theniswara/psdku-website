package com.polinema.psdku.springbootbackend.controller;

import com.polinema.psdku.springbootbackend.model.Admin;
import com.polinema.psdku.springbootbackend.model.Dosen;
import com.polinema.psdku.springbootbackend.model.LoginRequest;
import com.polinema.psdku.springbootbackend.repository.AdminRepository;
import com.polinema.psdku.springbootbackend.repository.DosenRepository;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/auth")
public class LoginController {

  @Autowired
  private DosenRepository dosenRepository;

  @Autowired
  private AdminRepository adminRepository;

  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody LoginRequest req) {

    // coba login sebagai dosen
    Dosen d = dosenRepository.findByNidn(req.getId());
    if (d != null) {
      if (d.getPassword().equals(req.getPassword())) {
        Map<String, Object> res = new HashMap<>();
        res.put("role", "dosen");
        res.put("data", d);
        return ResponseEntity.ok(res);
      }
      return ResponseEntity.status(401).body("Password salah");
    }

    // coba login sebagai admin
    Admin a = adminRepository.findByUsername(req.getId());
    if (a != null) {
      if (a.getPassword().equals(req.getPassword())) {
        Map<String, Object> res = new HashMap<>();
        res.put("role", "admin");
        res.put("data", a);
        return ResponseEntity.ok(res);
      }
      return ResponseEntity.status(401).body("Password salah");
    }

    return ResponseEntity.status(404).body("Akun tidak ditemukan");
  }

}
