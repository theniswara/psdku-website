package com.polinema.psdku.springbootbackend.controller;

import com.polinema.psdku.springbootbackend.model.Dosen;
import com.polinema.psdku.springbootbackend.repository.BidangKeahlianRepository;
import com.polinema.psdku.springbootbackend.repository.DosenRepository;
import com.polinema.psdku.springbootbackend.repository.LinkEksternalRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.polinema.psdku.springbootbackend.model.Presensi;
import com.polinema.psdku.springbootbackend.repository.PresensiRepository;
import com.polinema.psdku.springbootbackend.repository.SertifikasiRepository;

import java.time.LocalDate;
import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/dosen")
public class DosenController {

  @Autowired
  private DosenRepository dosenRepository;

  //GET all dosne
  @GetMapping
  public List<Dosen> getAllDosen() {
    return dosenRepository.findAll();
  }

  //POST new dosen
  @PostMapping
  public Dosen addDosen(@RequestBody Dosen dosen) { 
    return dosenRepository.save(dosen);
  }

  // GET dosen by ID
@GetMapping("/{id}")
public ResponseEntity<Dosen> getDosenById(@PathVariable int id) {
    Optional<Dosen> dosen = dosenRepository.findById(id);
    return dosen.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
}

  // DELETE dosen by id
  @DeleteMapping("/{id}")
  public void deleteDosen(@PathVariable int id) {
    dosenRepository.deleteById(id);
  }

  @Autowired
  private PresensiRepository presensiRepository;

  @Autowired
private SertifikasiRepository sertifikasiRepository;

@Autowired
private BidangKeahlianRepository bidangKeahlianRepository;

@Autowired
private LinkEksternalRepository linkEksternalRepository;

  @GetMapping("/status-today")
  public List<Map<String, Object>> getDosenWithStatusToday() {
    List<Dosen> all = dosenRepository.findAll();
    LocalDate today = LocalDate.now();
    List<Map<String, Object>> output = new ArrayList<>();


    for (Dosen d : all) {
        Optional<Presensi> presensiOpt = presensiRepository.findByIdDosenAndTanggal(d.getIdDosen(), today);

        Map<String, Object> item = new LinkedHashMap<>();
        item.put("idDosen", d.getIdDosen());
        item.put("namaDosen", d.getNamaDosen());
        item.put("prodi", d.getProdi());
        item.put("email", d.getEmail());
        item.put("foto", d.getFoto());

        if (presensiOpt.isPresent()) {
            Presensi p = presensiOpt.get();
            item.put("statusPresensi", p.getStatusPresensi());
            item.put("waktuMasuk", p.getWaktuMasuk());
            item.put("waktuKeluar", p.getWaktuKeluar());
        } else {
            item.put("statusPresensi", null);
            item.put("waktuMasuk", null);
            item.put("waktuKeluar", null);
        }

        output.add(item);
    }

    return output;
  }
  // =======================
// PRESENSI: ABSEN MASUK
// =======================
@PostMapping("/presensi/masuk")
public ResponseEntity<?> presensiMasuk(@RequestBody Map<String, Integer> req) {
    int idDosen = req.get("idDosen");
    LocalDate today = LocalDate.now();

    Optional<Presensi> existing = presensiRepository.findByIdDosenAndTanggal(idDosen, today);
    if (existing.isPresent()) {
        return ResponseEntity.status(400).body("Sudah absen masuk hari ini");
    }

    Presensi p = new Presensi();
    p.setIdDosen(idDosen);
    p.setTanggal(today);
    p.setWaktuMasuk(java.time.LocalDateTime.now());
    p.setStatusPresensi("Hadir");

    return ResponseEntity.ok(presensiRepository.save(p));
}


// =======================
// PRESENSI: ABSEN KELUAR
// =======================
@PostMapping("/presensi/keluar")
public ResponseEntity<?> presensiKeluar(@RequestBody Map<String, Integer> req) {
    int idDosen = req.get("idDosen");
    LocalDate today = LocalDate.now();

    Optional<Presensi> existing = presensiRepository.findByIdDosenAndTanggal(idDosen, today);
    if (existing.isEmpty()) {
        return ResponseEntity.status(400).body("Belum absen masuk");
    }

    Presensi p = existing.get();
    p.setWaktuKeluar(java.time.LocalDateTime.now());
    p.setStatusPresensi("Pulang");

    return ResponseEntity.ok(presensiRepository.save(p));
}


// =======================
// PRESENSI: GET STATUS HARI INI
// =======================
@GetMapping("/presensi/status/{id}")
public ResponseEntity<?> getStatusHariIni(@PathVariable int id) {
    LocalDate today = LocalDate.now();

    Optional<Presensi> existing = presensiRepository.findByIdDosenAndTanggal(id, today);
    if (existing.isEmpty()) {
        return ResponseEntity.ok("Belum Hadir");
    }

    return ResponseEntity.ok(existing.get());
}

}
