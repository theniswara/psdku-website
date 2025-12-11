package com.polinema.psdku.springbootbackend.controller;

import com.polinema.psdku.springbootbackend.model.Dosen;
import com.polinema.psdku.springbootbackend.model.Pendidikan;
import com.polinema.psdku.springbootbackend.repository.DosenRepository;
import com.polinema.psdku.springbootbackend.repository.PendidikanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pendidikan")
public class PendidikanController {

    @Autowired
    private PendidikanRepository pendidikanRepository;

    @Autowired
    private DosenRepository dosenRepository;

    // list by dosen
    @GetMapping("/by-dosen/{idDosen}")
    public ResponseEntity<List<Pendidikan>> getByDosen(@PathVariable int idDosen) {
        return ResponseEntity.ok(pendidikanRepository.findByDosenIdDosen(idDosen));
    }

    // create (body contains jenjang, jurusan, universitas, tahunMulai, tahunSelesai, idDosen)
    @PostMapping
    public ResponseEntity<?> create(@RequestBody Pendidikan req) {
        // req.dosen should contain an id (idDosen) from frontend
        if (req.getDosen() == null || req.getDosen().getIdDosen() == 0) {
            return ResponseEntity.badRequest().body("Missing idDosen");
        }
        Optional<Dosen> dOpt = dosenRepository.findById(req.getDosen().getIdDosen());
        if (dOpt.isEmpty()) return ResponseEntity.badRequest().body("Dosen not found");

        req.setDosen(dOpt.get());
        Pendidikan saved = pendidikanRepository.save(req);
        return ResponseEntity.ok(saved);
    }

    // update
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable int id, @RequestBody Pendidikan req) {
        Optional<Pendidikan> pOpt = pendidikanRepository.findById(id);
        if (pOpt.isEmpty()) return ResponseEntity.notFound().build();

        Pendidikan p = pOpt.get();
        p.setJenjang(req.getJenjang());
        p.setJurusan(req.getJurusan());
        p.setUniversitas(req.getUniversitas());
        p.setTahunMulai(req.getTahunMulai());
        p.setTahunSelesai(req.getTahunSelesai());
        pendidikanRepository.save(p);
        return ResponseEntity.ok(p);
    }

    // delete
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable int id) {
        if (!pendidikanRepository.existsById(id)) return ResponseEntity.notFound().build();
        pendidikanRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
