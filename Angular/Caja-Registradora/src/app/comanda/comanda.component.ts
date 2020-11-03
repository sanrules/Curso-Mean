import { Producto } from './../productos';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() comanda: Producto[];
  total: number;

  constructor() {
    this.total = 0;
  }

  ngOnInit(): void {
  }

  sumarTotal(): void {
    console.log("Change");
    // this.total += precio;
  }

}
