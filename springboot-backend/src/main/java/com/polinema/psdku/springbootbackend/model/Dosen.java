package com.polinema.psdku.springbootbackend.model;

import jakarta.persistence.*;

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

  @Column(name = "username", length = 100)
  private String username;

  @Column(name = "password", length = 100)
  private String password;

  // Constructors
  public Dosen() {
  }

  public Dosen(String nip, String nidn, String namaDosen, String username, String password) {
    this.nip = nip;
    this.nidn = nidn;
    this.namaDosen = namaDosen;
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
