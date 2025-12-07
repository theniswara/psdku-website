import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs'; // Import forkJoin

// Services
import { AuthService } from '../../services/auth.service';
import { DosenService } from '../../services/dosen.service';

// Pipe (IMPORTANT: Import the same pipe you used in DataDosen)
import { FilterDosenPipe } from '../../pipes/filter-dosen.pipe';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    FormsModule, 
    FilterDosenPipe // Register the Pipe here
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
logout() {
throw new Error('Method not implemented.');
}

  admin: any;
  dosenList: any[] = []; // Will hold merged data
  loading = true;
  deletingId: number | null = null;

  // Search Variable (Matches your reference)
  searchKeyword: string = ''; 

  constructor(
    private auth: AuthService,
    private dosenService: DosenService,
  ) {}

  ngOnInit(): void {
    this.admin = this.auth.getLoggedInUser();
    this.loadData(); // Changed name to match the logic of loading ALL data
  }

  // LOGIC COPIED & ADAPTED FROM YOUR REFERENCE
  loadData() {
    this.loading = true;



    // Use forkJoin to get BOTH the profile data and the status data
    forkJoin({
      dosenAll: this.dosenService.getAllDosen(),
      statusAll: this.dosenService.getStatusToday()
    }).subscribe({
      next: ({ dosenAll, statusAll }) => {
        // 1. Create a Map for fast status lookup
        const statusMap = new Map<any, any>();
        (statusAll || []).forEach((s: any) => {
          const key = s.idDosen ?? s.id;
          if (key != null) statusMap.set(key, s);
        });

        // 2. Merge status into the main list
        this.dosenList = (dosenAll || []).map((d: any) => {
          const key = d.idDosen ?? d.id;
          const status = statusMap.get(key) || {};
          return { ...d, ...status }; // Merged Object
        });

        this.loading = false;
      },
      error: (err) => {
        console.error('Gagal memuat data dashboard', err);
        this.loading = false;
      }
    });
  }

  // Your delete logic remains the same
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
  
  // Helpers for the stats cards based on the NOW MERGED list
  get totalDosen() { return this.dosenList.length; }
  get totalHadir() { return this.dosenList.filter(d => d.statusPresensi === 'Hadir').length; }
  get totalOffline() { return this.dosenList.filter(d => !d.statusPresensi).length; }
}