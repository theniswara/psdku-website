package com.polinema.psdku.springbootbackend.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "mata_kuliah")
public class MataKuliah {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_mk")
    private int idMk;

    @ManyToOne
    @JoinColumn(name = "id_dosen")
    @JsonIgnoreProperties("mataKuliah")
    private Dosen dosen;

    @Column(name = "nama_mk", length = 150)
    private String namaMk;

    @Column(name = "semester", length = 50)
    private String semester; // Ganjil / Genap

    public int getIdMk() {
        return idMk;
    }

    public void setIdMk(int idMk) {
        this.idMk = idMk;
    }

    public Dosen getDosen() {
        return dosen;
    }

    public void setDosen(Dosen dosen) {
        this.dosen = dosen;
    }

    public String getNamaMk() {
        return namaMk;
    }

    public void setNamaMk(String namaMk) {
        this.namaMk = namaMk;
    }

    public String getSemester() {
        return semester;
    }

    public void setSemester(String semester) {
        this.semester = semester;
    }
}
