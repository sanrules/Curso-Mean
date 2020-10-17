import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valorSelect: string;
  contadores: number[];

  constructor() {
    this.valorSelect = "No se ha seleccionado nada";
    this.contadores = [5, 7, 9, 11];
  }

  cambiaSelect($event) {
    console.log($event.target.value);
    this.valorSelect = $event.target.value;
  }

  onTerminaCrono($event) {
    console.log($event);
  }
}
