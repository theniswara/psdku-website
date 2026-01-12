import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DosenService } from '../../services/dosen.service';
import { forkJoin } from 'rxjs';
import { StatCardComponent, StatCardConfig } from '../shared/components/stat-card/stat-card.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, StatCardComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  admin: any;
  loading = true;

  // Stats
  totalDosen = 0;
  totalHadir = 0;
  totalOffline = 0;

  // Dynamic Stat Cards Configuration
  statCards: StatCardConfig[] = [];

  // Calendar Logic
  today = new Date();
  currentMonth = this.today.toLocaleString('default', { month: 'long' });
  calendarDays: number[] = [];

  // Chart Data (will be dynamic later)
  attendanceChart = [
    { day: 'Sen', value: 85 },
    { day: 'Sel', value: 92 },
    { day: 'Rab', value: 78 },
    { day: 'Kam', value: 95 },
    { day: 'Jum', value: 88 },
    { day: 'Sab', value: 60 },
  ];

  constructor(
    private auth: AuthService,
    private dosenService: DosenService
  ) { }

  ngOnInit(): void {
    this.admin = this.auth.getLoggedInUser();
    this.generateCalendar();
    this.initializeStatCards();
    this.loadData();
  }

  initializeStatCards() {
    // Initialize with placeholder values - will be updated when data loads
    this.statCards = [
      {
        title: 'Total Mahasiswa',
        value: '-',
        icon: 'fa-solid fa-graduation-cap',
        iconBgClass: 'bg-blue-50',
        iconTextClass: 'text-blue-600',
        progress: 0,
        progressLabel: 'Active this semester'
      },
      {
        title: 'Total Dosen',
        value: '-',
        icon: 'fa-solid fa-chalkboard-user',
        iconBgClass: 'bg-orange-50',
        iconTextClass: 'text-orange-500',
        progress: 0,
        progressLabel: 'Present today'
      },
      {
        title: 'Kehadiran',
        value: '-',
        icon: 'fa-solid fa-chart-line',
        iconBgClass: 'bg-green-50',
        iconTextClass: 'text-green-500',
        trend: { value: '+0%', direction: 'neutral', label: 'vs last month' }
      },
      {
        title: 'Berita Terbaru',
        value: '-',
        icon: 'fa-solid fa-newspaper',
        iconBgClass: 'bg-purple-50',
        iconTextClass: 'text-purple-500',
        subtitle: 'Total artikel'
      }
    ];
  }

  loadData() {
    this.loading = true;
    forkJoin({
      dosenAll: this.dosenService.getAllDosen(),
      statusAll: this.dosenService.getStatusToday()
    }).subscribe({
      next: ({ dosenAll, statusAll }) => {
        this.totalDosen = dosenAll?.length || 0;
        this.totalHadir = statusAll?.length || 0;
        this.totalOffline = this.totalDosen - this.totalHadir;

        // Update stat cards with real data
        this.updateStatCards();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  updateStatCards() {
    const attendancePercent = this.totalDosen > 0
      ? Math.round((this.totalHadir / this.totalDosen) * 100)
      : 0;

    this.statCards = [
      {
        title: 'Total Mahasiswa',
        value: '1,245', // Will be dynamic when API ready
        icon: 'fa-solid fa-graduation-cap',
        iconBgClass: 'bg-blue-50',
        iconTextClass: 'text-blue-600',
        progress: 75,
        progressLabel: 'Active this semester'
      },
      {
        title: 'Total Dosen',
        value: this.totalDosen,
        icon: 'fa-solid fa-chalkboard-user',
        iconBgClass: 'bg-orange-50',
        iconTextClass: 'text-orange-500',
        progress: attendancePercent,
        progressLabel: `${this.totalHadir} Present today`
      },
      {
        title: 'Kehadiran',
        value: `${attendancePercent}%`,
        icon: 'fa-solid fa-chart-line',
        iconBgClass: 'bg-green-50',
        iconTextClass: 'text-green-500',
        trend: {
          value: attendancePercent > 80 ? '+2.4%' : '-1.2%',
          direction: attendancePercent > 80 ? 'up' : 'down',
          label: 'vs last month'
        }
      },
      {
        title: 'Berita Terbaru',
        value: '12', // Will be dynamic when news API ready
        icon: 'fa-solid fa-newspaper',
        iconBgClass: 'bg-purple-50',
        iconTextClass: 'text-purple-500',
        subtitle: 'Total artikel'
      }
    ];
  }

  generateCalendar() {
    const daysInMonth = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0).getDate();
    this.calendarDays = [];
    for (let i = 1; i <= daysInMonth; i++) {
      this.calendarDays.push(i);
    }
  }
}