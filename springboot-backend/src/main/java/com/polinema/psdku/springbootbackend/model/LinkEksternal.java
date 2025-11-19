package com.polinema.psdku.springbootbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;

@Entity
@Table(name = "link_eksternal")
public class LinkEksternal {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id_link")
  private int idLink;

  @ManyToOne
  @JoinColumn(name = "id_dosen")
  @JsonIgnoreProperties("linkEksternal")
  private Dosen dosen;

  @Column(name = "nama_platform", length = 100)
  private String namaPlatform;

  @Column(name = "url", length = 255)
  private String url;

  public int getIdLink() {
    return idLink;
  }

  public void setIdLink(int idLink) {
    this.idLink = idLink;
  }

  public Dosen getDosen() {
    return dosen;
  }

  public void setDosen(Dosen dosen) {
    this.dosen = dosen;
  }

  public String getNamaPlatform() {
    return namaPlatform;
  }

  public void setNamaPlatform(String namaPlatform) {
    this.namaPlatform = namaPlatform;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

}
