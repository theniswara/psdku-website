package com.polinema.psdku.springbootbackend.controller;

import com.polinema.psdku.springbootbackend.model.Dosen;
import com.polinema.psdku.springbootbackend.repository.DosenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
}
