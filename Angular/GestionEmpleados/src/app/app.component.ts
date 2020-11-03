import { Component } from '@angular/core';
import { IEmpleado } from './empleado.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrEmpleados: IEmpleado[];

  constructor() {
    this.arrEmpleados = [];
  }

  onEnviaEmpleado($event): void {
    this.arrEmpleados.push($event);
    console.log(this.arrEmpleados);
  }

  recuperarContabilidad(dept: string): Array<IEmpleado> {
    return this.arrEmpleados.filter(empleado => empleado.departamento === dept);
  }
}
