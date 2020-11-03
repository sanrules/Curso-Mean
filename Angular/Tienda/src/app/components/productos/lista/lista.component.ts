import { ProductosService } from './../../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/services/productos.service';
import { ppid } from 'process';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  productos: Producto[];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getAll()
      .then((response) => {
        this.productos = response;
      }).catch((err) => {
        console.log(err);
      });
  }

  onClickEliminar(pProducto: Producto) {
    this.productosService.delete(pProducto._id)
      .then(async (response) => {
        if (response.success) {
          try {
            this.productos = await this.productosService.getAll();
          } catch (error) {
            console.log(error);
          }
        }
      }).catch(err => console.log(err));
  }

}
