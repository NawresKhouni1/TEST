import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3000'; // Your API endpoint

  constructor(private http: HttpClient) {}

  getDocumentData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/document`); 
  }

  getQuizData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/quiz`); 
  }

  getTokenData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/token`); 
  }

  getSCompetenceData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/competence`);
  }
}
