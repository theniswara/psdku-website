import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DosenService } from '../../services/dosen.service';

@Component({
  selector: 'app-data-dosen',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './data-dosen.component.html',
  styleUrls: ['./data-dosen.component.css']
})
export class DataDosenComponent implements OnInit {
  dosenList: any[] = [];
  loading = false;
  error = '';

  constructor(private dosenService: DosenService) {}

  ngOnInit(): void {
    this.loadDosen();
  }

  loadDosen(): void {
    this.loading = true;
    this.error = '';
    // try the presensi endpoint first (status-today)
    this.dosenService.getDosenStatusToday().subscribe({
      next: data => {
        this.dosenList = data || [];
        this.loading = false;
      },
      error: err => {
        console.error('Error fetching /status-today, falling back to /api/dosen', err);
        // fallback to plain list if status-today fails
        this.dosenService.getAllDosen().subscribe({
          next: data => {
            this.dosenList = data || [];
            this.loading = false;
          },
          error: e2 => {
            console.error('Fallback also failed', e2);
            this.error = 'Gagal memuat data dosen. Periksa backend (CORS / endpoint).';
            this.loading = false;
          }
        });
      }
    });
  }

  getStatusLabel(d: any): string {
    // adapt to your backend values
    if (!d) return 'Tidak Hadir';
    if (d.statusPresensi) return d.statusPresensi;
    // maybe backend sets status based on waktuMasuk/waktuKeluar
    if (d.waktuMasuk && !d.waktuKeluar) return 'Hadir';
    return 'Tidak Hadir';
  }

  isOnline(d: any): boolean {
    // treat hadir with no waktuKeluar as online
    return !!d && (d.statusPresensi === 'Hadir' || (!!d.waktuMasuk && !d.waktuKeluar));
  }
}
