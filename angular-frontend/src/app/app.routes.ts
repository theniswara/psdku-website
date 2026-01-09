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

  // DASHBOARD — Admin
  {
    path: 'admin-dashboard',
    loadComponent: () => import('./admin/dashboard/admin-dashboard.component')
      .then(m => m.AdminDashboardComponent),
    canActivate: [AuthGuard]
  },

  // DASHBOARD — Dosen
  {
    path: 'dosen-dashboard',
    loadComponent: () => import('./pages/dosen-dashboard/dosen-dashboard.component')
      .then(m => m.DosenDashboardComponent),
    canActivate: [AuthGuard]
  },

  // ADMIN: Add New Lecturer
  {
    path: 'admin/dosen/add',
    loadComponent: () =>
      import('./admin/dosen/dosen-form/dosen-form.component')
        .then(m => m.DosenFormComponent),
    canActivate: [AuthGuard]
  },

  // ADMIN: Manage a specific lecturer (CRUD full profile)
  // {
  //   path: 'admin/dosen/:id',
  //   loadComponent: () =>
  //     import('./admin/dosen-detail/admin-dosen-detail.component')
  //       .then(m => m.AdminDosenDetailComponent),
  //   canActivate: [AuthGuard]
  // },

  {
    path: 'admin/dosen/:id',
    loadComponent: () =>
      import('./admin/dosen-detail-admin/dosen-detail-admin.component')
        .then(m => m.DosenDetailAdminComponent),
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
