import { ITarea } from './../../model/tarea.interface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nuevaTarea: ITarea;

  @Output() tareaCreada: EventEmitter<ITarea>;

  constructor() {
    this.nuevaTarea = {};
    this.tareaCreada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log(this.nuevaTarea);
    this.tareaCreada.emit(this.nuevaTarea);
  }

}
