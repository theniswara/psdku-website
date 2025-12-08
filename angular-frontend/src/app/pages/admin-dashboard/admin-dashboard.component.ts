import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { DosenService } from '../../services/dosen.service';
import { FilterDosenPipe } from '../../pipes/filter-dosen.pipe';
import { AdminModalComponent } from '../../admin/admin-modal/admin-modal.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    FormsModule, 
    FilterDosenPipe,
    AdminModalComponent
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  today = new Date();

  admin: any;
  dosenList: any[] = [];
  loading = true;
  
  // Filter Variables
  searchKeyword: string = ''; 
  selectedProdi: string = '';
  selectedStatus: string = '';

  // ✅ Modal State Variables
  showModal = false;
  modalType: string | null = null;
  selectedDosenId: number = 0;

  constructor(
    private auth: AuthService,
    private dosenService: DosenService,
    private router: Router
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

  // ✅ 1. NEW: Open the Modal instead of confirm()
  openDeleteModal(id: number) {
    this.selectedDosenId = id;
    this.modalType = 'delete-dosen'; // Matches the type in AdminModalComponent
    this.showModal = true;
  }

  // ✅ 2. NEW: Handle closing (and refreshing if deleted)
  closeModal(refresh: boolean) {
    this.showModal = false;
    this.selectedDosenId = 0;
    this.modalType = null;

    if (refresh) {
      // If modal returned 'true', it means delete was successful
      this.loadData(); 
    }
  }

  // Helper Getters
  get totalDosen() { return this.dosenList.length; }
  get totalHadir() { return this.dosenList.filter(d => d.statusPresensi === 'Hadir').length; }
  get totalOffline() { return this.dosenList.filter(d => !d.statusPresensi).length; }
  
  get prodiList() {
    const prodis = this.dosenList.map(d => d.prodi).filter(p => p);
    return [...new Set(prodis)];
  }
}