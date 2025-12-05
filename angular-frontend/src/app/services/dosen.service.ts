import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DosenService {
  private baseDosenUrl = 'http://localhost:8080/api/dosen';
  private basePendidikanUrl = 'http://localhost:8080/api/pendidikan';
  private baseKeahlianUrl = 'http://localhost:8080/api/bidang';
  private baseSertifikasiUrl = 'http://localhost:8080/api/sertifikasi';
  private baseMatkulUrl = 'http://localhost:8080/api/matakuliah';
  private baseLinkUrl = 'http://localhost:8080/api/link';




  constructor(private http: HttpClient) {}

  /* ======================================================
     DOSEN CRUD (MAIN ENTITY)
     ====================================================== */

  getAllDosen(): Observable<any[]> {
    return this.http.get<any[]>(this.baseDosenUrl);
  }

  getDosenById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseDosenUrl}/${id}`);
  }

  createDosen(data: any): Observable<any> {
    return this.http.post<any>(this.baseDosenUrl, data);
  }

  updateDosen(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseDosenUrl}/${id}`, data);
  }

  deleteDosen(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseDosenUrl}/${id}`);
  }

  /* ======================================================
     PRESENSI
     ====================================================== */

  getStatusToday(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseDosenUrl}/status-today`);
  }

  getStatusById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseDosenUrl}/presensi/status/${id}`);
  }

  /* ======================================================
     PENDIDIKAN
     ====================================================== */

  getPendidikanByDosen(idDosen: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.basePendidikanUrl}/by-dosen/${idDosen}`
    );
  }

  createPendidikan(data: any): Observable<any> {
    return this.http.post<any>(this.basePendidikanUrl, data);
  }

  updatePendidikan(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.basePendidikanUrl}/${id}`, data);
  }

  deletePendidikan(id: number): Observable<any> {
    return this.http.delete<any>(`${this.basePendidikanUrl}/${id}`);
  }

  /* ======================================================
     FULL PROFILE (ADMIN)
     ====================================================== */

  getFullProfile(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseDosenUrl}/${id}/full`);
  }

  // ==============================
  // KEAHLIAN CRUD
  // ==============================

  getKeahlianByDosen(idDosen: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseKeahlianUrl}/by-dosen/${idDosen}`);
  }

  createKeahlian(data: any): Observable<any> {
    return this.http.post<any>(this.baseKeahlianUrl, data);
  }

  updateKeahlian(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseKeahlianUrl}/${id}`, data);
  }

  deleteKeahlian(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseKeahlianUrl}/${id}`);
  }

  /* ======================================================
   SERTIFIKASI (CHILD CRUD)
   ====================================================== */


  // GET sertifikasi by dosen
  getSertifikasiByDosen(idDosen: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.baseSertifikasiUrl}/by-dosen/${idDosen}`
    );
  }

  // CREATE sertifikasi
  createSertifikasi(data: any): Observable<any> {
    return this.http.post<any>(this.baseSertifikasiUrl, data);
  }

  // UPDATE sertifikasi
  updateSertifikasi(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseSertifikasiUrl}/${id}`, data);
  }

  // DELETE sertifikasi
  deleteSertifikasi(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseSertifikasiUrl}/${id}`);
  }

  /* ======================================================
   MATA KULIAH (CHILD CRUD)
   ====================================================== */


  // GET matkul by dosen
  getMatkulByDosen(idDosen: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseMatkulUrl}/by-dosen/${idDosen}`);
  }

  // CREATE matkul
  createMatkul(data: any): Observable<any> {
    return this.http.post<any>(this.baseMatkulUrl, data);
  }

  // UPDATE matkul
  updateMatkul(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseMatkulUrl}/${id}`, data);
  }

  // DELETE matkul
  deleteMatkul(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseMatkulUrl}/${id}`);
  }

  /* ======================================================
   LINK EKSTERNAL (CHILD CRUD)
   ====================================================== */


  // GET link by dosen
  getLinkByDosen(idDosen: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseLinkUrl}/by-dosen/${idDosen}`);
  }

  // CREATE link
  createLink(data: any): Observable<any> {
    return this.http.post<any>(this.baseLinkUrl, data);
  }

  // UPDATE link
  updateLink(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseLinkUrl}/${id}`, data);
  }

  // DELETE link
  deleteLink(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseLinkUrl}/${id}`);
  }
}
