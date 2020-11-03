import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }

  onClick(ruta): void {
    console.log(ruta);
    // Acciones que tarden un tiempo. Ej.: Gestión de un formulario.
    this.router.navigate([ruta]);
  }
}
