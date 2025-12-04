import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

import { DosenService } from '../../services/dosen.service';
import { FilterDosenPipe } from '../../pipes/filter-dosen.pipe';

import { NavbarComponent } from '../../components/navbar/navbar.component';  
import { FooterComponent } from '../../components/footer/footer.component';



@Component({
  selector: 'app-data-dosen',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    FilterDosenPipe,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './data-dosen.component.html',
  styleUrls: ['./data-dosen.component.css']
})
export class DataDosenComponent implements OnInit {
  dosenList: any[] = [];
  loading = false;
  error = '';

  searchKeyword: string = '';
  selectedProdi: string = '';

  constructor(private dosenService: DosenService) {}

  ngOnInit(): void {
    this.loadDosen();
  }

  loadDosen(): void {
     this.loading = true;
    this.error = '';

    // Load full dosen data and today's status, then merge so the list shows nidn and
    // still has statusPresensi / waktuMasuk / waktuKeluar when available.
    forkJoin({
      dosenAll: this.dosenService.getAllDosen(),
      statusAll: this.dosenService.getStatusToday()
    }).subscribe({
      next: ({ dosenAll, statusAll }) => {
        const statusMap = new Map<any, any>();
        (statusAll || []).forEach((s: any) => {
          // prefer idDosen property as key, fallback to id
          const key = s.idDosen ?? s.id;
          if (key != null) statusMap.set(key, s);
        });

        this.dosenList = (dosenAll || []).map((d: any) => {
          const key = d.idDosen ?? d.id;
          const status = statusMap.get(key) || {};
          // merge status fields onto the dosen object (non-destructive)
          return { ...d, ...status };
        });

        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Gagal memuat data dosen';
        this.loading = false;
      }
    });
  }

  getStatusLabel(d: any): string {
    if (!d) return 'Tidak Hadir';
    if (d.statusPresensi) return d.statusPresensi;
    if (d.waktuMasuk && !d.waktuKeluar) return 'Hadir';
    return 'Tidak Hadir';
  }

  isOnline(d: any): boolean {
    return !!d && (d.statusPresensi === 'Hadir' || (!!d.waktuMasuk && !d.waktuKeluar));
  }
}
