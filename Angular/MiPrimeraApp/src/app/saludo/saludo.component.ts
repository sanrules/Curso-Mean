import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  // Solo las variables que estén aquí definidas son las que se van a poder ver dentro del html
  nombre: string;
  identificador: string;

  constructor() {
    this.nombre = "Pepe";
    this.identificador = "identificadorParrafo"
    setTimeout(() => {
      this.nombre = "Juan";
      this.identificador = "otroIdentificador"
    }, 3000);
  }

  ngOnInit(): void {
  }

  generarSaludo(): string {
    return "¡Hola qué pasa!";
  }

  pulsaBoton() {
    console.log("Botón purzao");
    this.nombre = "José"
  }

}
