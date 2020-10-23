import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Input() valor: string;
  @Input() class: string;
  @Output() pulsarBoton: EventEmitter<string>;

  constructor() {
    this.pulsarBoton = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log("salida", this.valor);
    this.pulsarBoton.emit(this.valor);
  }

}
