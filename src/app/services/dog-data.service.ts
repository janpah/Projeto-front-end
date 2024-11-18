import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogDataService {
  private apiUrl = 'https://api.thedogapi.com/v1/breeds';
  private apiKey = 'live_YTM1JczJwoTp6PclwG3ewAn5PiQdgJrjSo9CbgTEkJOeS8IPb0NSuJmQSE3tJEgA';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<any[]> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });

    return this.http.get<any[]>(this.apiUrl, { headers });
  }
}
