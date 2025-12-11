import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DosenService } from '../../services/dosen.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface PresensiStatus {
  statusPresensi: string;
  waktuMasuk: string | null;
  waktuKeluar: string | null;
}

@Component({
  selector: 'app-dosen-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './dosen-detail.component.html',
  styleUrls: ['./dosen-detail.component.css']
})
export class DosenDetailComponent implements OnInit {

  id!: number;
  dosen: any = null;
  loading = true;
  activeTab: string = 'biodata';

  constructor(
    private route: ActivatedRoute,
    private dosenService: DosenService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadDosen();
  }

  /* ========================================================
     LOAD DOSEN + STATUS PRESENSI
     ======================================================== */
  loadDosen() {
    this.loading = true;

    this.dosenService.getDosenById(this.id).subscribe({
      next: (data) => {
        this.dosen = data;

        // Load presensi status separately
        this.loadPresensi(this.id);
      },
      error: (err) => {
        console.error("Error load dosen:", err);
        this.loading = false;
      }
    });
  }

  loadPresensi(idDosen: number) {
    this.dosenService.getStatusById(idDosen).subscribe({
      next: (status: PresensiStatus | string) => {
        if (typeof status === 'string') {
          this.dosen.statusPresensi = "Belum Hadir";
          this.dosen.waktuMasuk = null;
          this.dosen.waktuKeluar = null;
        } else {
          this.dosen.statusPresensi = status.statusPresensi;
          this.dosen.waktuMasuk = status.waktuMasuk;
          this.dosen.waktuKeluar = status.waktuKeluar;
        }

        this.loading = false;
      },
      error: () => {
        // If presensi doesn't exist
        this.dosen.statusPresensi = "Belum Hadir";
        this.dosen.waktuMasuk = null;
        this.dosen.waktuKeluar = null;

        this.loading = false;
      }
    });
  }

  /* ========================================================
     UI HELPERS
     ======================================================== */

  setTab(tab: string) {
    this.activeTab = tab;
  } 

  isOnline(d: any): boolean {
    return d &&
      (d.statusPresensi === 'Hadir' ||
      (!!d.waktuMasuk && !d.waktuKeluar));
  }
}
