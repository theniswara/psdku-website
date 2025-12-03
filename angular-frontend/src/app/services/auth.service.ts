import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }

  logoutBackend(idDosen: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/logout`, { id: idDosen });
  }

  saveSession(res: any) {
    localStorage.setItem('userSession', 'true');
    localStorage.setItem('user', JSON.stringify(res.data));
    localStorage.setItem('role', res.role);
    localStorage.setItem('id', res.id);
  }

  getLoggedInUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  getRole() {
    return localStorage.getItem('role');
  }

  logoutFrontend() {
    localStorage.clear();
  }

  getPresensiStatus(idDosen: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/dosen/presensi/status/${idDosen}`);
  }
}
