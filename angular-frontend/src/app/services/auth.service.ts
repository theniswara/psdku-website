import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = '/api';

  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }

  logoutBackend(idDosen: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/logout`, { id: idDosen });
  }

  saveSession(res: any) {
    if (this.isBrowser) {
      localStorage.setItem('userSession', 'true');
      localStorage.setItem('user', JSON.stringify(res.data));
      localStorage.setItem('role', res.role);
      localStorage.setItem('id', res.id);
    }
  }

  getLoggedInUser() {
    if (this.isBrowser) {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  getRole() {
    if (this.isBrowser) {
      return localStorage.getItem('role');
    }
    return null;
  }

  logoutFrontend() {
    if (this.isBrowser) {
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  }

  logout() {
    if (this.isBrowser) {
      const id = localStorage.getItem('id');
      if (id) {
        this.logoutBackend(Number(id)).subscribe({
          next: () => this.logoutFrontend(),
          error: () => this.logoutFrontend()
        });
      } else {
        this.logoutFrontend();
      }
    }
  }

  // dev helper
  loginDev(role: 'admin' | 'dosen' = 'admin') {
    if (this.isBrowser) {
      const mockUser = {
        data: {
          username: 'Dev User',
          email: 'dev@local.test',
          nama: 'Developer Local'
        },
        role: role,
        id: 999
      };
      this.saveSession(mockUser);
    }
  }

  getPresensiStatus(idDosen: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/dosen/presensi/status/${idDosen}`);
  }
}
