import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DosenService {
  private baseUrl = 'http://localhost:8080/api/dosen';

  constructor(private http: HttpClient) {}

  getAllDosen(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getDosenById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
