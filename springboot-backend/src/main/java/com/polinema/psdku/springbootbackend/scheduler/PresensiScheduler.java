package com.polinema.psdku.springbootbackend.scheduler;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.polinema.psdku.springbootbackend.repository.PresensiRepository;
import com.polinema.psdku.springbootbackend.model.Presensi;

@Component
public class PresensiScheduler {

    @Autowired
    private PresensiRepository presensiRepository;

    // AUTO-PULANG jam 17:00 setiap hari
    @Scheduled(cron = "0 */1 * * * *")  
    public void autoLogoutDosen() {

        LocalDate today = LocalDate.now();
        LocalDateTime now = LocalDateTime.now();

        List<Presensi> daftar = presensiRepository.findAll();

        for (Presensi p : daftar) {
            if (p.getTanggal().isEqual(today)) {
                // Sudah hadir tapi belum pulang
                if (p.getWaktuMasuk() != null && p.getWaktuKeluar() == null) {
                    p.setWaktuKeluar(now);
                    p.setStatusPresensi("Auto-Pulang");
                    presensiRepository.save(p);
                }
            }
        }

        System.out.println("AUTO-LOGOUT selesai dijalankan jam 17:00");
    }
}
