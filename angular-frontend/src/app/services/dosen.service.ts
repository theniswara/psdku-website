import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DosenService {

  private baseDosenUrl = "http://localhost:8080/api/dosen";
  private basePendidikanUrl = "http://localhost:8080/api/pendidikan";

  constructor(private http: HttpClient) {}

  /* ======================================================
     DOSEN CRUD (MAIN ENTITY)
     ====================================================== */

  // GET all dosen
  getAllDosen(): Observable<any[]> {
    return this.http.get<any[]>(this.baseDosenUrl);
  }

  // GET dosen by ID
  getDosenById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseDosenUrl}/${id}`);
  }

  // CREATE dosen
  createDosen(data: any): Observable<any> {
    return this.http.post<any>(this.baseDosenUrl, data);
  }

  // UPDATE dosen
  updateDosen(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseDosenUrl}/${id}`, data);
  }

  // DELETE dosen
  deleteDosen(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseDosenUrl}/${id}`);
  }

  /* ======================================================
     PRESENSI (For Dashboard Display)
     ====================================================== */

  // GET presensi status for ALL dosen today
  getStatusToday(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseDosenUrl}/status-today`);
  }

  // GET presensi for a specific dosen today
  getStatusById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseDosenUrl}/presensi/status/${id}`);
  }

  /* ======================================================
     PENDIDIKAN (CHILD CRUD)
     ====================================================== */

  // GET all pendidikan for a dosen
  getPendidikanByDosen(idDosen: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.basePendidikanUrl}/by-dosen/${idDosen}`);
  }

  // CREATE pendidikan
  createPendidikan(data: any): Observable<any> {
    return this.http.post<any>(this.basePendidikanUrl, data);
  }

  // UPDATE pendidikan
  updatePendidikan(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.basePendidikanUrl}/${id}`, data);
  }

  // DELETE pendidikan
  deletePendidikan(id: number): Observable<any> {
    return this.http.delete<any>(`${this.basePendidikanUrl}/${id}`);
  }

}
