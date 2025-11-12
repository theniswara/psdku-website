import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DosenService {

  private apiUrl = 'http://localhost:8080/api/dosen';

  constructor(private http: HttpClient) {}

  getAllDosenStatusToday(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/status-today`);
  }
}
