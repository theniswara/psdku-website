package com.polinema.psdku.springbootbackend.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "bidang_keahlian")
public class BidangKeahlian {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_keahlian")
    private int idKeahlian;

    @Column(name = "nama_keahlian", length = 200)
    private String namaKeahlian;

    @ManyToOne
    @JoinColumn(name = "id_dosen")
    @JsonIgnoreProperties("bidangKeahlian")
    private Dosen dosen;

    // getters & setters

    public int getIdKeahlian() {
      return idKeahlian;
    }

    public void setIdKeahlian(int idKeahlian) {
      this.idKeahlian = idKeahlian;
    }

    public String getNamaKeahlian() {
      return namaKeahlian;
    }

    public void setNamaKeahlian(String namaKeahlian) {
      this.namaKeahlian = namaKeahlian;
    }

    public Dosen getDosen() {
      return dosen;
    }

    public void setDosen(Dosen dosen) {
      this.dosen = dosen;
    }
}
