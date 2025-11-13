import { Routes } from '@angular/router';
import { DataDosenComponent } from './pages/data-dosen/data-dosen.component';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'dosen', component: DataDosenComponent },
];
