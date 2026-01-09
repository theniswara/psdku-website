import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-rekap-presensi',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './admin-rekap-presensi.component.html',
  styleUrls: ['./admin-rekap-presensi.component.css']
})
export class AdminRekapPresensiComponent implements OnInit {

  // Filters
  startDate: string = '';
  endDate: string = '';
  selectedProdi: string = '';

  // Dummy Data (Mocking a database response for a date range)
  allData = [
    { id: 1, tanggal: '2024-11-01', nama: 'Dr. Budi Santoso', prodi: 'Teknologi Informasi', masuk: '07:45', keluar: '16:00', status: 'Hadir', durasi: '8j 15m' },
    { id: 2, tanggal: '2024-11-01', nama: 'Siti Aminah, M.Kom', prodi: 'Akuntansi', masuk: '08:10', keluar: '15:50', status: 'Terlambat', durasi: '7j 40m' },
    { id: 3, tanggal: '2024-11-01', nama: 'Rudi Hermawan, S.T.', prodi: 'Teknik Sipil', masuk: '-', keluar: '-', status: 'Alpha', durasi: '-' },
    { id: 4, tanggal: '2024-11-02', nama: 'Dr. Budi Santoso', prodi: 'Teknologi Informasi', masuk: '07:50', keluar: '16:10', status: 'Hadir', durasi: '8j 20m' },
    { id: 5, tanggal: '2024-11-02', nama: 'Siti Aminah, M.Kom', prodi: 'Akuntansi', masuk: '07:55', keluar: '16:00', status: 'Hadir', durasi: '8j 05m' },
  ];

  filteredData: any[] = [];

  ngOnInit() {
    // Default to show all data initially
    this.filteredData = this.allData;
    // Set default dates (optional)
    this.startDate = '2024-11-01';
    this.endDate = '2024-11-30';
  }

  // Filter Logic
  applyFilter() {
    this.filteredData = this.allData.filter(item => {
      const matchProdi = this.selectedProdi ? item.prodi === this.selectedProdi : true;
      // In a real app, you would compare Date objects here
      return matchProdi;
    });
  }

  // Helper Stats
  get totalHadir() { return this.filteredData.filter(d => d.status === 'Hadir').length; }
  get totalTerlambat() { return this.filteredData.filter(d => d.status === 'Terlambat').length; }
  get totalAlpha() { return this.filteredData.filter(d => d.status === 'Alpha').length; }
  
  // UX: Export function placeholder
  exportExcel() {
    alert('Mengunduh laporan dalam format Excel...');
  }
}