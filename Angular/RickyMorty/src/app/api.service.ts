import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://rickandmortyapi.com/api/character';
  }

  getPersonajes(page: number): Promise<any> {
    return this.http.get(`${this.baseUrl}?page=${page}`).toPromise();
  }


}
