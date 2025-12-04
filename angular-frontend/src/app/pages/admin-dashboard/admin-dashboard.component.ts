import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { DosenService } from '../../services/dosen.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  admin: any;
  dosenList: any[] = [];
  loading = true;
  deletingId: number | null = null;

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

  deleteDosen(id: number) {
    const ok = confirm('Yakin ingin menghapus dosen ini? Semua data terkait akan ikut terhapus.');
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
