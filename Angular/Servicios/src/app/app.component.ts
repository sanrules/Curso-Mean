import { Persona, PersonasService } from './services/personas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  personas: Persona[];

  constructor(private personasService: PersonasService) { }

  async ngOnInit() {
    // const persona = this.personasService.getAll();
    // console.log(persona);

    // Con promesa:
    // this.personasService.getAllPromise()
    //   .then((arr) => {
    //     console.log(arr);
    //     this.personas = arr;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // Con promesas async-await
    try {
      this.personas = await this.personasService.getAllPromise();
    } catch (error) {
      console.log(error);
    }
  }

  onClickMayores(): void {
    this.personasService.mayoresEdadV2()
      .then(arr => {
        this.personas = arr;
      })
      .catch(error => console.log(error));

  }

  async onClickTrabajo() {
    this.personas = await this.personasService.estaTrabajando();
  }

  onClickAgregar() {
    this.personasService.create({ nombre: 'La', apellidos: 'Rosalía', edad: 12, trabajo: false })
      .then((mensaje) => console.log(mensaje)).catch(err => console.log(err));
  }
}
