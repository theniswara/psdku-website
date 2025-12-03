import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DosenService {

  private baseUrl = "http://localhost:8080/api/dosen";

  constructor(private http: HttpClient) {}

  // GET all dosen
  getAllDosen(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // GET dosen by ID
  getDosenById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // GET presensi status for ALL dosen today
  getStatusToday(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/status-today`);
  }

  // GET presensi status SPECIFIC dosen today
  getStatusById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/presensi/status/${id}`);
  }
}
