import { Router } from '@angular/router';
import { ProductosService } from './../../../services/productos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  formNuevo: FormGroup;

  constructor(
    private productosService: ProductosService,
    private router: Router
  ) {
    this.formNuevo = new FormGroup({
      nombre: new FormControl(),
      descripcion: new FormControl(),
      precio: new FormControl(),
      departamento: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.productosService.create(this.formNuevo.value)
      .then((response) => {
        if (response.success) {
          this.router.navigate(['/productos']);
        }
      }).catch((err) => {
        console.log(err);
      });
  }

}
