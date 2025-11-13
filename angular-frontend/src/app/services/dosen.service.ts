import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DosenService {
  // adjust base if your backend uses a different path/port
  private baseUrl = 'http://localhost:8080/api/dosen';

  constructor(private http: HttpClient) {}

  // fetch list with today's presensi status (the endpoint name you used earlier)
  getDosenStatusToday(): Observable<any[]> {
    // try both possible endpoints used in the convo
    // change to '/status-today' if your backend uses that path
    return this.http.get<any[]>(`${this.baseUrl}/status-today`);
  }

  // fallback for plain list if your backend exposes GET /api/dosen
  getAllDosen(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // get one dosen by id
  getDosenById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
