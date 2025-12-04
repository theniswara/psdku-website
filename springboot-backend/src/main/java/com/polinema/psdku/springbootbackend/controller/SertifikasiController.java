package com.polinema.psdku.springbootbackend.controller;

import com.polinema.psdku.springbootbackend.model.Dosen;
import com.polinema.psdku.springbootbackend.model.Sertifikasi;
import com.polinema.psdku.springbootbackend.repository.DosenRepository;
import com.polinema.psdku.springbootbackend.repository.SertifikasiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/sertifikasi")
public class SertifikasiController {

    @Autowired
    private SertifikasiRepository repo;

    @Autowired
    private DosenRepository dosenRepo;

    @GetMapping("/by-dosen/{id}")
    public ResponseEntity<List<Sertifikasi>> byDosen(@PathVariable int id) {
        return ResponseEntity.ok(repo.findByDosenIdDosen(id));
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Sertifikasi req) {
        if (req.getDosen() == null || req.getDosen().getIdDosen() == 0) {
            return ResponseEntity.badRequest().body("Missing idDosen");
        }
        Optional<Dosen> dOpt = dosenRepo.findById(req.getDosen().getIdDosen());
        if (dOpt.isEmpty()) return ResponseEntity.badRequest().body("Dosen not found");
        req.setDosen(dOpt.get());
        return ResponseEntity.ok(repo.save(req));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable int id, @RequestBody Sertifikasi req) {
        Optional<Sertifikasi> opt = repo.findById(id);
        if (opt.isEmpty()) return ResponseEntity.notFound().build();
        Sertifikasi s = opt.get();
        s.setNamaSertifikasi(req.getNamaSertifikasi());
        s.setPenerbit(req.getPenerbit());
        s.setTanggalTerbit(req.getTanggalTerbit());
        repo.save(s);
        return ResponseEntity.ok(s);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable int id) {
        if (!repo.existsById(id)) return ResponseEntity.notFound().build();
        repo.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
