import { IEmpleado } from './../empleado.interface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nuevoEmpleado: IEmpleado;

  @Output() enviaEmpleado: EventEmitter<IEmpleado>;

  constructor() {
    this.nuevoEmpleado = {};
    this.enviaEmpleado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.enviaEmpleado.emit(this.nuevoEmpleado);
    this.nuevoEmpleado = {};
  }

}
