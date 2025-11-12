package com.polinema.psdku.springbootbackend.controller;

import com.polinema.psdku.springbootbackend.model.Dosen;
import com.polinema.psdku.springbootbackend.repository.DosenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.polinema.psdku.springbootbackend.model.Presensi;
import com.polinema.psdku.springbootbackend.repository.PresensiRepository;
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

  // DELETE dosen by id
  @DeleteMapping("/{id}")
  public void deleteDosen(@PathVariable int id) {
    dosenRepository.deleteById(id);
  }

  @Autowired
  private PresensiRepository presensiRepository;

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

}
