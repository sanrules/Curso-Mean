import { Escritor, EscritoresService } from './../../services/escritores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {

  arrEscritores: Escritor[];

  constructor(private escritoresService: EscritoresService) { }

  ngOnInit(): void {
    this.escritoresService.getAll()
      .then(escritores => this.arrEscritores = escritores)
      .catch(error => console.log(error));
  }

  // tslint:disable-next-line: typedef
  async onChange($event) {
    const valor = $event.target.value;
    try {
      this.arrEscritores = valor !== 'todos' ? await this.escritoresService.getByPais(valor) : await this.escritoresService.getAll();
    } catch (error) {
      console.log(error);
    }

  }

}
