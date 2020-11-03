import { Injectable } from '@angular/core';

export interface Persona {
  nombre: string;
  apellidos: string;
  edad: number;
  trabajo: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  arrPersonas: Persona[];

  constructor() {
    this.arrPersonas = [
      { nombre: 'Sandra', apellidos: 'Cerro', edad: 27, trabajo: true },
      { nombre: 'Marta', apellidos: 'Cerro', edad: 21, trabajo: false },
      { nombre: 'Álvaro', apellidos: 'Madrid', edad: 26, trabajo: true },
      { nombre: 'Fry', apellidos: 'El gato', edad: 3, trabajo: false },
      { nombre: 'Hodor', apellidos: 'El gato', edad: 4, trabajo: false },
    ];
  }

  getAll(): Persona[] {
    return this.arrPersonas;
  }

  // Args de promise: Cuando se resuelva la promesa de manera positiva, qué dato voy a tener
  getAllPromise(): Promise<Persona[]> {
    return new Promise<Persona[]>((resolve, reject) => {
      resolve(this.arrPersonas);
    });
  }

  mayoresEdad(): Promise<Persona[]> {
    return new Promise<Persona[]>((resolve, reject) => {
      const arrFiltrado: Persona[] = [];
      for (const persona of this.arrPersonas) {
        if (persona.edad >= 18) {
          arrFiltrado.push(persona);
        }
      }
      resolve(arrFiltrado);
    });
  }

  mayoresEdadV2(): Promise<Persona[]> {
    // return new Promise((resolve, reject) => {
    //   resolve(this.arrPersonas.filter(pers => pers.edad >= 18));
    // });

    return Promise.resolve(this.arrPersonas.filter(pers => pers.edad >= 18))
  }

  estaTrabajando(): Promise<Persona[]> {
    return Promise.resolve(this.arrPersonas.filter(pers => pers.trabajo));
  }

  create(pPersona: Persona) {
    return new Promise((resolve, reject) => {
      this.arrPersonas.push(pPersona);
      resolve('Se ha agregado el objeto');
    });
  }
}
