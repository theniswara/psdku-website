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

  // Login
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component')
      .then(m => m.LoginComponent)
  },

  // DASHBOARD — Admin
  {
    path: 'admin-dashboard',
    loadComponent: () => import('./pages/admin-dashboard/admin-dashboard.component')
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
      import('./admin/dosen-form/dosen-form.component')
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
