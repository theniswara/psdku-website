import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

  this.dosenService.getStatusToday().subscribe({
    next: (statusList) => {
      this.dosenList = statusList;
      this.loading = false;
    },
    error: (err) => {
      console.error(err);
      this.error = 'Gagal memuat data presensi';
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
