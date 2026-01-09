import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [

  // Home (public)
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component')
      .then(m => m.HomeComponent)
  },

  // Tentang Kami (About Us)
  {
    path: 'tentang-kami',
    loadComponent: () => import('./pages/tentang-kami/tentang-kami.component')
      .then(m => m.TentangKamiComponent)
  },

  // Visi Misi
  {
    path: 'visi-misi',
    loadComponent: () => import('./pages/visi-misi/visi-misi.component')
      .then(m => m.VisiMisiComponent)
  },

  // Sarana Prasarana
  {
    path: 'sarana',
    loadComponent: () => import('./pages/sarana-prasarana/sarana-prasarana.component')
      .then(m => m.SaranaPrasaranaComponent)
  },

  // Struktur Organisasi
  {
    path: 'struktur-organisasi',
    loadComponent: () => import('./pages/struktur-organisasi/struktur-organisasi.component')
      .then(m => m.StrukturOrganisasiComponent)
  },

  // Program Studi
  {
    path: 'prodi',
    loadComponent: () => import('./pages/prodi-page/prodi-page.component')
      .then(m => m.ProdiPageComponent)
  },

  // Program Studi Detail
  {
    path: 'prodi/:id',
    loadComponent: () => import('./pages/prodi-detail/prodi-detail.component')
      .then(m => m.ProdiDetailComponent)
  },

  // Jadwal Kuliah Listing
  {
    path: 'jadwal',
    loadComponent: () => import('./pages/jadwal-page/jadwal-page.component')
      .then(m => m.JadwalPageComponent)
  },

  // Jadwal Detail (Per-Prodi)
  {
    path: 'jadwal/:prodiId',
    loadComponent: () => import('./pages/jadwal-detail/jadwal-detail.component')
      .then(m => m.JadwalDetailComponent)
  },

  // Berita & Pengumuman Landing
  {
    path: 'berita',
    loadComponent: () => import('./pages/berita-page/berita-page.component')
      .then(m => m.BeritaPageComponent)
  },

  // Berita Grid List
  {
    path: 'berita/list',
    loadComponent: () => import('./pages/berita-list/berita-list.component')
      .then(m => m.BeritaListComponent)
  },

  // Berita Detail
  {
    path: 'berita/:id',
    loadComponent: () => import('./pages/berita-detail/berita-detail.component')
      .then(m => m.BeritaDetailComponent)
  },

  // Public Dosen Directory
  {
    path: 'dosen', loadComponent: () =>
      import('./pages/data-dosen/data-dosen.component')
        .then(m => m.DataDosenComponent)
  },

  // Public Dosen Detail (read-only)
  {
    path: 'dosen/:id', loadComponent: () =>
      import('./pages/dosen-detail/dosen-detail.component')
        .then(m => m.DosenDetailComponent)
  },

  // Organisasi Mahasiswa & UKM
  {
    path: 'ukm',
    loadComponent: () => import('./pages/ukm-page/ukm-page.component')
      .then(m => m.UkmPageComponent)
  },

  // Job Portal Landing
  {
    path: 'job-portal',
    loadComponent: () => import('./pages/job-portal/job-portal.component')
      .then(m => m.JobPortalComponent)
  },

  // Job Portal List
  {
    path: 'job-portal/list',
    loadComponent: () => import('./pages/job-list/job-list.component')
      .then(m => m.JobListComponent)
  },

  // Login
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component')
      .then(m => m.LoginComponent)
  },

  // ADMIN ROOT
  {
    path: 'admin',
    loadComponent: () => import('./admin/layout/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      // Dashboard
      {
        path: 'dashboard',
        loadComponent: () => import('./admin/dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent)
      },

      // Rekap Presensi
      {
        path: 'presensi',
        loadComponent: () => import('./admin/presensi/rekap-presensi/admin-rekap-presensi.component').then(m => m.AdminRekapPresensiComponent)
      },

      // Dosen List or Dosen Sub-module could go here
      // For now, redirecting /admin/dosen to /admin/dosen/add based on old routes, but usually there's a list.
      // Based on sidebar (Data Dosen -> /admin/dosen), let's assume we might need a list component later.
      // For now, I will keep 'add' and 'detail' as requested.

      // Add New Dosen
      {
        path: 'dosen/add',
        loadComponent: () => import('./admin/dosen/dosen-form/dosen-form.component').then(m => m.DosenFormComponent)
      },

      // Dosen Detail
      {
        path: 'dosen/:id',
        loadComponent: () => import('./admin/dosen/dosen-detail/dosen-detail-admin.component').then(m => m.DosenDetailAdminComponent)
      }
    ]
  },

  // PREVIOUSLY FLAT ROUTES (Redirects or Removals)
  // admin-dashboard is now admin/dashboard
  { path: 'admin-dashboard', redirectTo: 'admin/dashboard', pathMatch: 'full' },

  // DASHBOARD — Dosen (Keep as is for now)
  {
    path: 'dosen-dashboard',
    loadComponent: () => import('./pages/dosen-dashboard/dosen-dashboard.component')
      .then(m => m.DosenDashboardComponent),
    canActivate: [AuthGuard]
  },

  {
    path: 'pmb',
    loadComponent: () =>
      import('./pages/pmb/pmb.component')
        .then(m => m.PmbComponent)
  },


  {
    path: 'kurikulum',
    loadComponent: () => import('./pages/kurikulum/kurikulum.component')
      .then(m => m.KurikulumComponent)
  },




  // fallback
  { path: '**', redirectTo: '' }
];
