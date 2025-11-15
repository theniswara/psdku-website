package com.polinema.psdku.springbootbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
@Table(name = "pendidikan")
public class Pendidikan {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int idPendidikan;

  @Column(length = 10)
  private String jenjang; // S1, S2, S3, Prof

  private String jurusan;

  private String universitas;

  private int tahunMulai;

  private int tahunSelesai;

  // RELASI KE DOSEN
  @ManyToOne
  @JoinColumn(name = "id_dosen")
  @JsonIgnoreProperties("pendidikan")
  private Dosen dosen;

  // getters & setters
  public int getIdPendidikan() {
    return idPendidikan;
  }

  public void setIdPendidikan(int idPendidikan) {
    this.idPendidikan = idPendidikan;
  }

  public String getJenjang() {
    return jenjang;
  }

  public void setJenjang(String jenjang) {
    this.jenjang = jenjang;
  }

  public String getJurusan() {
    return jurusan;
  }

  public void setJurusan(String jurusan) {
    this.jurusan = jurusan;
  }

  public String getUniversitas() {
    return universitas;
  }

  public void setUniversitas(String universitas) {
    this.universitas = universitas;
  }

  public int getTahunMulai() {
    return tahunMulai;
  }

  public void setTahunMulai(int tahunMulai) {
    this.tahunMulai = tahunMulai;
  }

  public int getTahunSelesai() {
    return tahunSelesai;
  }

  public void setTahunSelesai(int tahunSelesai) {
    this.tahunSelesai = tahunSelesai;
  }

  public Dosen getDosen() {
    return dosen;
  }

  public void setDosen(Dosen dosen) {
    this.dosen = dosen;
  }
}