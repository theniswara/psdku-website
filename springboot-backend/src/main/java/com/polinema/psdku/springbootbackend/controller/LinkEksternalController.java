package com.polinema.psdku.springbootbackend.controller;

import com.polinema.psdku.springbootbackend.model.Dosen;
import com.polinema.psdku.springbootbackend.model.LinkEksternal;
import com.polinema.psdku.springbootbackend.repository.DosenRepository;
import com.polinema.psdku.springbootbackend.repository.LinkEksternalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/link")
public class LinkEksternalController {

    @Autowired
    private LinkEksternalRepository repo;

    @Autowired
    private DosenRepository dosenRepo;

    @GetMapping("/by-dosen/{id}")
    public ResponseEntity<List<LinkEksternal>> byDosen(@PathVariable int id) {
        return ResponseEntity.ok(repo.findByDosenIdDosen(id));
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody LinkEksternal req) {
        if (req.getDosen() == null || req.getDosen().getIdDosen() == 0) {
            return ResponseEntity.badRequest().body("Missing idDosen");
        }
        Optional<Dosen> dOpt = dosenRepo.findById(req.getDosen().getIdDosen());
        if (dOpt.isEmpty()) return ResponseEntity.badRequest().body("Dosen not found");
        req.setDosen(dOpt.get());
        return ResponseEntity.ok(repo.save(req));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable int id, @RequestBody LinkEksternal req) {
        Optional<LinkEksternal> opt = repo.findById(id);
        if (opt.isEmpty()) return ResponseEntity.notFound().build();
        LinkEksternal l = opt.get();
        l.setNamaPlatform(req.getNamaPlatform());
        l.setUrl(req.getUrl());
        repo.save(l);
        return ResponseEntity.ok(l);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable int id) {
        if (!repo.existsById(id)) return ResponseEntity.notFound().build();
        repo.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
