import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  operandos: Array<string>;
  operacion: string;
  nuevaOperacion: boolean;
  operaciones: Array<string>;

  constructor() {
    this.operacion = '0';
    this.operaciones = ['+', '-', '*', '/', '='];
    this.operandos = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    this.nuevaOperacion = false;
  }

  realizarOperacion($event) {
    console.log($event);

    if ($event === '=') {
      this.operacion = eval(this.operacion).toString();
      this.nuevaOperacion = true;
    } else {
      if (this.operaciones.find(valor => (valor === $event) ? true : false)) {
        this.nuevaOperacion = false;
      }
      if (this.nuevaOperacion) {
        this.operacion = '';
      }

      this.nuevaOperacion = false;

      if (this.operacion === '0') {
        this.operacion = $event.toString();
      } else {
        this.operacion += $event;
      }
    }
  }
}
