package com.polinema.psdku.springbootbackend.controller;

import com.polinema.psdku.springbootbackend.model.Admin;
import com.polinema.psdku.springbootbackend.model.Dosen;
import com.polinema.psdku.springbootbackend.model.LoginRequest;
import com.polinema.psdku.springbootbackend.model.Presensi;
import com.polinema.psdku.springbootbackend.repository.AdminRepository;
import com.polinema.psdku.springbootbackend.repository.DosenRepository;
import com.polinema.psdku.springbootbackend.repository.PresensiRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/auth")
public class LoginController {

    @Autowired
    private DosenRepository dosenRepository;

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private PresensiRepository presensiRepository;


    // ==========================================
    //                LOGIN
    // ==========================================
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {

        Dosen d = dosenRepository.findByNidn(req.getId());
        if (d != null) {
            if (d.getPassword().equals(req.getPassword())) {

                LocalDate today = LocalDate.now();
                LocalDateTime now = LocalDateTime.now();

                Optional<Presensi> presOpt =
                    presensiRepository.findByIdDosenAndTanggal(d.getIdDosen(), today);

                if (presOpt.isPresent()) {
                    Presensi p = presOpt.get();
                    if (p.getWaktuMasuk() == null) {
                        p.setWaktuMasuk(now);
                        p.setStatusPresensi("Hadir");
                        presensiRepository.save(p);
                    }
                } else {
                    Presensi p = new Presensi();
                    p.setIdDosen(d.getIdDosen());
                    p.setTanggal(today);
                    p.setWaktuMasuk(now);
                    p.setStatusPresensi("Hadir");
                    presensiRepository.save(p);
                }

                Map<String, Object> res = new HashMap<>();
                res.put("role", "dosen");
                res.put("id", d.getIdDosen());
                res.put("data", d);

                return ResponseEntity.ok(res);
            }

            return ResponseEntity.status(401).body("Password salah");
        }

        Admin a = adminRepository.findByUsername(req.getId());
        if (a != null) {
            if (a.getPassword().equals(req.getPassword())) {
                Map<String, Object> res = new HashMap<>();
                res.put("role", "admin");
                res.put("id", a.getIdAdmin());
                res.put("data", a);
                return ResponseEntity.ok(res);
            }

            return ResponseEntity.status(401).body("Password salah");
        }

        return ResponseEntity.status(404).body("Akun tidak ditemukan");
    }



    // ==========================================
    //                LOGOUT
    // ==========================================
    @PostMapping("/logout")
    public ResponseEntity<?> logout(@RequestBody Map<String, Object> req) {

        int idDosen = Integer.parseInt(req.get("id").toString());
        LocalDate today = LocalDate.now();

        Optional<Presensi> presensiOpt =
                presensiRepository.findByIdDosenAndTanggal(idDosen, today);

        if (presensiOpt.isPresent()) {
            Presensi p = presensiOpt.get();
            p.setWaktuKeluar(LocalDateTime.now());
            p.setStatusPresensi("Selesai");
            presensiRepository.save(p);
        }

        return ResponseEntity.ok("Logout success");
    }
}
        