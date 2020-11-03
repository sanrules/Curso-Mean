import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Producto {
  _id: string;
  nombre: string;
  precio: number;
  descripcion: string;
  departamento: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/productos';
  }

  getHttpOptions(): any {
    return {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('tienda_token')
      }),
    };
  }

  getAll(): Promise<any> {
    return this.http.get<Producto[]>(this.baseUrl, this.getHttpOptions()).toPromise();
  }

  create(formValue: Producto): Promise<any> {
    return this.http.post(this.baseUrl, formValue, this.getHttpOptions()).toPromise();
  }

  delete(productoId: string): Promise<any> {
    return this.http.delete(`${this.baseUrl}/${productoId}`, this.getHttpOptions()).toPromise();
  }

}
