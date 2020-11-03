import { Producto } from './../productos';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo: string;
  @Input() productos: Producto[];
  @Output() enviaSeleccionado: EventEmitter<Producto>;

  constructor() {
    this.enviaSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  addListaSeleccionados(producto: Producto): void {
    this.enviaSeleccionado.emit(producto);
  }



}
