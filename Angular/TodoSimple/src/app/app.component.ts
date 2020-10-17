import { ITarea } from './model/tarea.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrTareas: ITarea[];

  constructor() {
    this.arrTareas = [];
  }

  onTareaCreada($event): void {
    this.arrTareas.push($event);
    console.log(this.arrTareas);
  }
}
