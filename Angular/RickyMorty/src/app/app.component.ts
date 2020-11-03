import { ApiService } from './api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pagina: number;
  personajes: any[];
  numPaginas: number;

  constructor(private apiService: ApiService) {
    this.pagina = 1;
  }

  ngOnInit(): void {
    this.getPersonajes();
    console.log(this.pagina);
  }

  getPersonajes(): void {
    this.apiService.getPersonajes(this.pagina)
      .then((response) => {
        this.personajes = response.results;
        this.numPaginas = response.info.pages;
      }).catch((err) => console.log(err));
  }

  onClick(siguiente: boolean): void {
    if (siguiente) {
      this.pagina++;
    } else {
      this.pagina--;
    }

    this.getPersonajes();
  }
}
