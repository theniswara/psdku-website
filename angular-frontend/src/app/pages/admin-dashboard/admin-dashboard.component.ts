import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { DosenService } from '../../services/dosen.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule for Search

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  admin: any;
  dosenList: any[] = [];
  loading = true;
  deletingId: number | null = null;
  searchTerm: string = ''; // For the search bar

  constructor(
    private auth: AuthService,
    private dosenService: DosenService
  ) {}

  ngOnInit(): void {
    this.admin = this.auth.getLoggedInUser();
    this.loadStatusHariIni();
  }

  loadStatusHariIni() {
    this.loading = true;
    this.dosenService.getStatusToday().subscribe({
      next: (data) => {
        this.dosenList = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  // Helper to filter list based on search term
  get filteredDosen() {
    if (!this.searchTerm) return this.dosenList;
    const lower = this.searchTerm.toLowerCase();
    return this.dosenList.filter(d => 
      d.namaDosen.toLowerCase().includes(lower) || 
      d.prodi.toLowerCase().includes(lower)
    );
  }

  // Helpers for Stats Cards
  get totalDosen() { return this.dosenList.length; }
  get totalHadir() { return this.dosenList.filter(d => d.statusPresensi === 'Hadir').length; }
  get totalOffline() { return this.dosenList.filter(d => !d.statusPresensi).length; }

  deleteDosen(id: number) {
    const ok = confirm('Yakin ingin menghapus dosen ini? Data tidak bisa dikembalikan.');
    if (!ok) return;

    this.deletingId = id;
    this.dosenService.deleteDosen(id).subscribe({
      next: () => {
        this.dosenList = this.dosenList.filter(d => d.idDosen !== id);
        this.deletingId = null;
      },
      error: () => {
        alert('Gagal menghapus dosen.');
        this.deletingId = null;
      }
    });
  }
}