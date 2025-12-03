package com.polinema.psdku.springbootbackend.scheduler;

import com.polinema.psdku.springbootbackend.model.Presensi;
import com.polinema.psdku.springbootbackend.repository.PresensiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Component
public class PresensiScheduler {

    @Autowired
    private PresensiRepository presensiRepository;

    // AUTO-PULANG jam 17:00 WIB setiap hari
    @Scheduled(cron = "0 */1 * * * *", zone = "Asia/Jakarta")
    public void autoLogoutDosen() {

        LocalDate today = LocalDate.now();
        LocalDateTime now = LocalDateTime.now();

        List<Presensi> daftar = presensiRepository.findAll();

        for (Presensi p : daftar) {
            if (p.getTanggal().isEqual(today)) {
                if (p.getWaktuMasuk() != null && p.getWaktuKeluar() == null) {
                    p.setWaktuKeluar(now);
                    p.setStatusPresensi("Auto-Pulang");
                    presensiRepository.save(p);
                }
            }
        }

        System.out.println("AUTO-LOGOUT (WIB) dijalankan jam 17:00");
    }
}
