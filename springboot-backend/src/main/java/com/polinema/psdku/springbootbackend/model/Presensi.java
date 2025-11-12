package com.polinema.psdku.springbootbackend.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "presensi")
public class Presensi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_presensi")
    private int idPresensi;

    @Column(name = "id_dosen")
    private int idDosen;

    @Column(name = "tanggal")
    private LocalDate tanggal;

    @Column(name = "waktu_masuk")
    private LocalDateTime waktuMasuk;

    @Column(name = "waktu_keluar")
    private LocalDateTime waktuKeluar;

    @Column(name = "status_presensi", length = 50)
    private String statusPresensi;

    @Column(name = "keterangan", length = 255)
    private String keterangan;

    // Empty constructor
    public Presensi() {
    }

    // Getters and Setters
    public int getIdPresensi() {
        return idPresensi;
    }

    public void setIdPresensi(int idPresensi) {
        this.idPresensi = idPresensi;
    }

    public int getIdDosen() {
        return idDosen;
    }

    public void setIdDosen(int idDosen) {
        this.idDosen = idDosen;
    }

    public LocalDate getTanggal() {
        return tanggal;
    }

    public void setTanggal(LocalDate tanggal) {
        this.tanggal = tanggal;
    }

    public LocalDateTime getWaktuMasuk() {
        return waktuMasuk;
    }

    public void setWaktuMasuk(LocalDateTime waktuMasuk) {
        this.waktuMasuk = waktuMasuk;
    }

    public LocalDateTime getWaktuKeluar() {
        return waktuKeluar;
    }

    public void setWaktuKeluar(LocalDateTime waktuKeluar) {
        this.waktuKeluar = waktuKeluar;
    }

    public String getStatusPresensi() {
        return statusPresensi;
    }

    public void setStatusPresensi(String statusPresensi) {
        this.statusPresensi = statusPresensi;
    }

    public String getKeterangan() {
        return keterangan;
    }

    public void setKeterangan(String keterangan) {
        this.keterangan = keterangan;
    }
}