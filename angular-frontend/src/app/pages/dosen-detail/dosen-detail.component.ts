import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DosenService } from '../../services/dosen.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from "../../components/footer/footer.component";

interface StatusData {
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
  dosen: any;
  activeTab: string = 'biodata';

  constructor(
    private route: ActivatedRoute,
    private dosenService: DosenService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadDosenDetail();
  }

loadDosenDetail() {
  this.dosenService.getDosenById(this.id).subscribe({
    next: (data) => {
      this.dosen = data;

      // ambil status hari ini
      this.dosenService.getStatusById(this.id).subscribe({
        next: (statusData: StatusData | string) => {
          if (typeof statusData === 'string') {
            // "Belum Hadir"
            this.dosen.statusPresensi = "Belum Hadir";
            this.dosen.waktuMasuk = null;
            this.dosen.waktuKeluar = null;
          } else {
            this.dosen.statusPresensi = statusData.statusPresensi;
            this.dosen.waktuMasuk = statusData.waktuMasuk;
            this.dosen.waktuKeluar = statusData.waktuKeluar;
          }
        }
      });
    },
    error: (err) => console.error("Failed to load detail:", err)
  });
}


  setTab(tab: string) {
    this.activeTab = tab;
  }

  isOnline(d: any): boolean {
    return !!d &&
      (d.statusPresensi === 'Hadir' ||
      (!!d.waktuMasuk && !d.waktuKeluar));
  }
}

