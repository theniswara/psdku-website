import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [

  // Home (public)
  { 
    path: '', 
    loadComponent: () => import('./pages/home/home.component')
      .then(m => m.HomeComponent) 
  },

  // Public Dosen Directory
  { path: 'dosen', loadComponent: () =>
      import('./pages/data-dosen/data-dosen.component')
        .then(m => m.DataDosenComponent)
  },

  // Public Dosen Detail (read-only)
  { path: 'dosen/:id', loadComponent: () =>
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
  
  // fallback
  { path: '**', redirectTo: '' }
];
