import { ITarea } from './../../model/tarea.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() tareas: ITarea[];

  constructor() { }

  ngOnInit(): void {
  }

  generarLista(): string {
    let resultado = '<ul>';

    for (const tarea of this.tareas) {
      resultado += `<li>${tarea.titulo} - ${tarea.descripcion}</li>`;
    }

    return resultado + '</ul>';
  }

}
