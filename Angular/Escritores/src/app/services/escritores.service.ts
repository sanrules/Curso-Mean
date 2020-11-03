import { ESCRITORES } from './../db/escritores.db';
import { Injectable } from '@angular/core';

export interface Escritor {
  id: number;
  nombre: string;
  apellidos: string;
  imagen: string;
  pais: string;
}

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  getAll(): Promise<Escritor[]> {
    return Promise.resolve(ESCRITORES);
  }

  getByPais(pPais: string): Promise<Escritor[]> {
    return Promise.resolve(ESCRITORES.filter(escritor => escritor.pais === pPais));
  }

  getById(pId: string): Promise<Escritor> {
    return Promise.resolve(ESCRITORES.find(escritor => escritor.id === parseInt(pId, 10)));
  }
}
