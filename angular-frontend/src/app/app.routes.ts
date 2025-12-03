import { Routes } from '@angular/router';
import { DataDosenComponent } from './pages/data-dosen/data-dosen.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { DosenDashboardComponent } from './pages/dosen-dashboard/dosen-dashboard.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'dosen', component: DataDosenComponent },
  {
  path: 'dosen/:id',
  loadComponent: () =>
    import('./pages/dosen-detail/dosen-detail.component')
      .then(m => m.DosenDetailComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
  path: 'admin-dashboard',
  loadComponent: () => import('./pages/admin-dashboard/admin-dashboard.component')
                      .then(m => m.AdminDashboardComponent),
  canActivate: [AuthGuard]
  },
  {
  path: 'dosen-dashboard',
  loadComponent: () => import('./pages/dosen-dashboard/dosen-dashboard.component')
                      .then(m => m.DosenDashboardComponent),
  canActivate: [AuthGuard]
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
