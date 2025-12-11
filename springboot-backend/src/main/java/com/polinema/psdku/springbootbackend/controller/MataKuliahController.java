package com.polinema.psdku.springbootbackend.controller;

import com.polinema.psdku.springbootbackend.model.Dosen;
import com.polinema.psdku.springbootbackend.model.MataKuliah;
import com.polinema.psdku.springbootbackend.repository.DosenRepository;
import com.polinema.psdku.springbootbackend.repository.MataKuliahRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/matakuliah")
public class MataKuliahController {

    @Autowired
    private MataKuliahRepository repo;

    @Autowired
    private DosenRepository dosenRepo;

    @GetMapping("/by-dosen/{id}")
    public ResponseEntity<List<MataKuliah>> byDosen(@PathVariable int id) {
        return ResponseEntity.ok(repo.findByDosenIdDosen(id));
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody MataKuliah req) {
        if (req.getDosen() == null || req.getDosen().getIdDosen() == 0) {
            return ResponseEntity.badRequest().body("Missing idDosen");
        }
        Optional<Dosen> dOpt = dosenRepo.findById(req.getDosen().getIdDosen());
        if (dOpt.isEmpty()) return ResponseEntity.badRequest().body("Dosen not found");
        req.setDosen(dOpt.get());
        return ResponseEntity.ok(repo.save(req));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable int id, @RequestBody MataKuliah req) {
        Optional<MataKuliah> opt = repo.findById(id);
        if (opt.isEmpty()) return ResponseEntity.notFound().build();
        MataKuliah m = opt.get();
        m.setNamaMk(req.getNamaMk());
        m.setSemester(req.getSemester());
        repo.save(m);
        return ResponseEntity.ok(m);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable int id) {
        if (!repo.existsById(id)) return ResponseEntity.notFound().build();
        repo.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
