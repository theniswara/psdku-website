import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router'; // Ensure Router is imported
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { DosenService } from '../../services/dosen.service';
import { FilterDosenPipe } from '../../pipes/filter-dosen.pipe';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    FormsModule, 
    FilterDosenPipe
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  admin: any;
  dosenList: any[] = [];
  loading = true;
  deletingId: number | null = null;

  // Filter Variables
  searchKeyword: string = ''; 
  selectedProdi: string = ''; // New filter for Prodi
  selectedStatus: string = ''; // New filter for Status (e.g., 'Hadir', 'Offline')

  constructor(
    private auth: AuthService,
    private dosenService: DosenService,
    private router: Router // Inject Router for logout
  ) {}

  ngOnInit(): void {
    this.admin = this.auth.getLoggedInUser();
    this.loadData();
  }

  loadData() {
    this.loading = true;
    forkJoin({
      dosenAll: this.dosenService.getAllDosen(),
      statusAll: this.dosenService.getStatusToday()
    }).subscribe({
      next: ({ dosenAll, statusAll }) => {
        const statusMap = new Map<any, any>();
        (statusAll || []).forEach((s: any) => {
          const key = s.idDosen ?? s.id;
          if (key != null) statusMap.set(key, s);
        });

        this.dosenList = (dosenAll || []).map((d: any) => {
          const key = d.idDosen ?? d.id;
          const status = statusMap.get(key) || {};
          return { ...d, ...status };
        });

        this.loading = false;
      },
      error: (err) => {
        console.error('Gagal memuat data dashboard', err);
        this.loading = false;
      }
    });
  }

logout() {
  this.auth.logoutFrontend();
  this.router.navigate(['/login']);
}

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
  
  get totalDosen() { return this.dosenList.length; }
  get totalHadir() { return this.dosenList.filter(d => d.statusPresensi === 'Hadir').length; }
  get totalOffline() { return this.dosenList.filter(d => !d.statusPresensi).length; }
  
  // Helper to get unique Prodis for dropdown
  get prodiList() {
    // Get unique prodi names from the list
    const prodis = this.dosenList.map(d => d.prodi).filter(p => p); // filter out null/undefined
    return [...new Set(prodis)]; // Returns unique array
  }
}