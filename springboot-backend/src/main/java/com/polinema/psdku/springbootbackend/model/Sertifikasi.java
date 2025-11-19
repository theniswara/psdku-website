package com.polinema.psdku.springbootbackend.model;

import jakarta.persistence.*;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "sertifikasi")
public class Sertifikasi {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id_sertifikasi")
  private int idSertifikasi;

  @ManyToOne
  @JoinColumn(name = "id_dosen")
  @JsonIgnoreProperties("sertifikasi")
  private Dosen dosen;

  @Column(name = "nama_sertifikasi", length = 150) 
  private String namaSertifikasi;

  @Column(name = "penerbit", length = 100)
  private String penerbit;

  @Column(name = "tanggal_terbit")
  private LocalDate tanggalTerbit;



  public int getIdSertifikasi() {
    return idSertifikasi;
  }

  public void setIdSertifikasi(int idSertifikasi) {
    this.idSertifikasi = idSertifikasi;
  }

  public Dosen getDosen() {
    return dosen;
  }

  public void setDosen(Dosen dosen) {
    this.dosen = dosen;
  }

  public String getNamaSertifikasi() {
    return namaSertifikasi;
  }

  public void setNamaSertifikasi(String namaSertifikasi) {
    this.namaSertifikasi = namaSertifikasi;
  }

  public String getPenerbit() {
    return penerbit;
  }

  public void setPenerbit(String penerbit) {
    this.penerbit = penerbit;
  }

  public LocalDate getTanggalTerbit() {
    return tanggalTerbit;
  }

  public void setTanggalTerbit(LocalDate tanggalTerbit) {
    this.tanggalTerbit = tanggalTerbit;
  }
}
