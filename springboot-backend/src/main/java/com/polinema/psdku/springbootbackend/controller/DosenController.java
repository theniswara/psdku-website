package com.polinema.psdku.springbootbackend.controller;

import com.polinema.psdku.springbootbackend.model.Dosen;
import com.polinema.psdku.springbootbackend.repository.*;
import com.polinema.psdku.springbootbackend.model.Presensi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.time.LocalDate;
import java.util.*;

@RestController
@RequestMapping("api/dosen")
public class DosenController {

  @Autowired
  private DosenRepository dosenRepository;

  @Autowired
  private PresensiRepository presensiRepository;

  @Autowired
  private SertifikasiRepository sertifikasiRepository;

  @Autowired
  private BidangKeahlianRepository bidangKeahlianRepository;

  @Autowired
  private LinkEksternalRepository linkEksternalRepository;

  @Autowired
  private PendidikanRepository pendidikanRepository;
  
  @Autowired
  private MataKuliahRepository mataKuliahRepository;

  // =======================
  // GET ALL DOSEN
  // =======================
  @GetMapping
  public List<Dosen> getAllDosen() {
    return dosenRepository.findAll();
  }

  // =======================
  // POST NEW DOSEN
  // =======================
  @PostMapping
  public Dosen addDosen(@RequestBody Dosen dosen) {
    return dosenRepository.save(dosen);
  }

  // =======================
  // ✅✅✅ FIX 1: UPDATE DOSEN (PUT)
  // =======================
  @PutMapping("/{id}")
  public ResponseEntity<?> updateDosen(
          @PathVariable int id,
          @RequestBody Dosen updated
  ) {
      Optional<Dosen> dosenOpt = dosenRepository.findById(id);
      if (dosenOpt.isEmpty()) {
          return ResponseEntity.notFound().build();
      }

      Dosen dosen = dosenOpt.get();

      dosen.setNamaDosen(updated.getNamaDosen());
      dosen.setNip(updated.getNip());
      dosen.setNidn(updated.getNidn());
      dosen.setJabatan(updated.getJabatan());
      dosen.setProdi(updated.getProdi());
      dosen.setEmail(updated.getEmail());
      dosen.setAlamatKantor(updated.getAlamatKantor());
      dosen.setWebsite(updated.getWebsite());

      // ⚠️ Foto TIDAK disentuh di sini
      dosenRepository.save(dosen);

      return ResponseEntity.ok(dosen);
  }

  // =======================
  // GET DOSEN BY ID
  // =======================
  @GetMapping("/{id}")
  public ResponseEntity<Dosen> getDosenById(@PathVariable int id) {
    Optional<Dosen> dosen = dosenRepository.findById(id);
    return dosen.map(ResponseEntity::ok)
        .orElseGet(() -> ResponseEntity.notFound().build());
  }

  // =======================
  // DELETE DOSEN
  // =======================
  @DeleteMapping("/{id}")
  public void deleteDosen(@PathVariable int id) {
    dosenRepository.deleteById(id);
  }

  // =======================
  // PRESENSI STATUS
  // =======================
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
  // FULL PROFILE
  // =======================
  @GetMapping("/{id}/full")
  public ResponseEntity<?> getDosenFullProfile(@PathVariable int id) {
    Optional<Dosen> dOpt = dosenRepository.findById(id);
    if (dOpt.isEmpty())
      return ResponseEntity.notFound().build();

    Dosen d = dOpt.get();

    Map<String, Object> out = new LinkedHashMap<>();
    out.put("dosen", d);
    out.put("pendidikan", pendidikanRepository.findByDosenIdDosen(id));
    out.put("mataKuliah", mataKuliahRepository.findByDosenIdDosen(id));
    out.put("sertifikasi", sertifikasiRepository.findByDosenIdDosen(id));
    out.put("bidangKeahlian", bidangKeahlianRepository.findByDosenIdDosen(id));
    out.put("linkEksternal", linkEksternalRepository.findByDosenIdDosen(id));

    return ResponseEntity.ok(out);
  }

  // =======================
  // ✅✅✅ UPLOAD FOTO
  // =======================
@PostMapping("/{id}/upload-foto")
public ResponseEntity<?> uploadFoto(
        @PathVariable int id,
        @RequestParam("file") MultipartFile file
) {
    try {
        Optional<Dosen> dosenOpt = dosenRepository.findById(id);
        if (dosenOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("Dosen tidak ditemukan");
        }

        Dosen dosen = dosenOpt.get();

        // FIX: Save all uploads to this exact folder on VPS
        String uploadDir = "/root/uploads/";
        File dir = new File(uploadDir);
        if (!dir.exists()) dir.mkdirs();

        String filename = UUID.randomUUID() + "-" + file.getOriginalFilename();
        File destination = new File(uploadDir + filename);
        file.transferTo(destination);

        dosen.setFoto(filename);
        dosenRepository.save(dosen);

        return ResponseEntity.ok(filename);

    } catch (Exception e) {
        e.printStackTrace();
        return ResponseEntity.internalServerError().body("Upload gagal");
    }
}

}
