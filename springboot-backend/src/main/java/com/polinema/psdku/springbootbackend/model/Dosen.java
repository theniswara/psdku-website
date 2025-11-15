package com.polinema.psdku.springbootbackend.model;

import jakarta.persistence.*;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "dosen")
public class Dosen {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id_dosen")
  private int idDosen;

  @Column(name = "nip", length = 50)
  private String nip;

  @Column(name = "nidn", length = 50)
  private String nidn;

  @Column(name = "nama_dosen", length = 100)
  private String namaDosen;

  @Column(name = "jabatan", length = 100)
  private String jabatan;

  @Column(name = "prodi", length = 100)
  private String prodi;

  @Column(name = "foto", length = 100)
  private String foto;

  @OneToMany(mappedBy = "dosen", cascade = CascadeType.ALL)
  @JsonIgnoreProperties("dosen")
  private List<Pendidikan> pendidikan;

  @OneToMany(mappedBy = "dosen", cascade = CascadeType.ALL)
  @JsonIgnoreProperties("dosen")
  private List<MataKuliah> mataKuliah;

  @Column(name = "email", length = 100)
  private String email;

  @Column(name = "alamat_kantor", length = 100)
  private String alamatKantor;

  @Column(name = "website", length = 100)
  private String website;

  @Column(name = "username", length = 100)
  private String username;

  @Column(name = "password", length = 100)
  private String password;

  // Constructors
  public Dosen() {
  }

  public Dosen(String nip, String nidn, String namaDosen, String jabatan, String prodi,
      String foto, String email, String alamatKantor, String website,
      String username, String password) {
    this.nip = nip;
    this.nidn = nidn;
    this.namaDosen = namaDosen;
    this.jabatan = jabatan;
    this.prodi = prodi;
    this.foto = foto;
    this.email = email;
    this.alamatKantor = alamatKantor;
    this.website = website;
    this.username = username;
    this.password = password;
  }

  // Getters and Setters
  public int getIdDosen() {
    return idDosen;
  }

  public void setIdDosen(int idDosen) {
    this.idDosen = idDosen;
  }

  public String getNip() {
    return nip;
  }

  public void setNip(String nip) {
    this.nip = nip;
  }

  public String getNidn() {
    return nidn;
  }

  public void setNidn(String nidn) {
    this.nidn = nidn;
  }

  public String getNamaDosen() {
    return namaDosen;
  }

  public void setNamaDosen(String namaDosen) {
    this.namaDosen = namaDosen;
  }

  public String getJabatan() {
    return jabatan;
  }

  public void setJabatan(String jabatan) {
    this.jabatan = jabatan;
  }

  public String getProdi() {
    return prodi;
  }

  public void setProdi(String prodi) {
    this.prodi = prodi;
  }

  public String getFoto() {
    return foto;
  }

  public void setFoto(String foto) {
    this.foto = foto;
  }

  public List<Pendidikan> getPendidikan() {
    return pendidikan;
  }

  public void setPendidikan(List<Pendidikan> pendidikan) {
    this.pendidikan = pendidikan;
  }

   public List<MataKuliah> getMataKuliah() {
    return mataKuliah;
  }

  public void setMataKuliah(List<MataKuliah> mataKuliah) {
    this.mataKuliah = mataKuliah;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getAlamatKantor() {
    return alamatKantor;
  }

  public void setAlamatKantor(String alamatKantor) {
    this.alamatKantor = alamatKantor;
  }

  public String getWebsite() {
    return website;
  }

  public void setWebsite(String website) {
    this.website = website;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
