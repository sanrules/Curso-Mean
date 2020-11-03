import { Producto } from './productos';
import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comida: Producto[];
  bebida: Producto[];
  productosSeleccionados: Producto[];

  constructor() {
    this.productosSeleccionados = [];
    this.comida = [{
      nombre: 'Albóndigas',
      url_imagen: 'https://www.personajesde.eu/wp-content/uploads/2019/12/de-beber-albondigas...-homer-e1575990997489.jpg',
      precio: 10,
    }, {
      nombre: 'Rosquillas',
      url_imagen: 'https://akns-images.eonline.com/eol_images/Entire_Site/2015825/rs_560x373-150925082142-homer-simpson.jpg?fit=around|560:auto&output-quality=90&crop=560:auto;center,top',
      precio: 5,
    },
    {
      nombre: 'Langosta',
      url_imagen: 'https://i.ytimg.com/vi/6WwkHdvWgNo/hqdefault.jpg',
      precio: 5,
    },
    {
      nombre: 'Hamburguesa',
      url_imagen: 'https://lh3.googleusercontent.com/proxy/TC0mquZDwuTAPgilMsKtqz7rbBy31Rs163203nkYFOgWP2E8RoNj1o1jffh6ZLlsVNVIGbqbsDse9PTWCZMyFAT5m4uq98dmzHfytATw5h1ZeBEpe56Y09xeTW5zCcbT5SnL8LGjZw-RC4qdOBtlv6efYqDhF4-r60_jDtGaFS8We48QYcSOzeyfwA',
      precio: 15,
    }];

    this.bebida = [{
      nombre: 'Duff',
      url_imagen: 'https://static.vix.com/es/sites/default/files/l/los_simpson-8.png',
      precio: 3,
    },
    {
      nombre: 'Fresisuis',
      url_imagen: 'https://urbanian.mundodeportivo.com/p/51ca/96370_ahora_puedes_preparar_un_fresisuis_mejor_que_el_de_apu_gracias_a_esta_receta.jpg?cb=1828828',
      precio: 4,
    },
    {
      nombre: 'Flameado',
      url_imagen: 'https://www.neoteo.com/wp-content/uploads/2019/09/logo-6-758x426.jpg',
      precio: 10,
    },
    {
      nombre: 'Vino',
      url_imagen: 'https://external-preview.redd.it/5VjVLiLo3SyhkjY3_px-Ru6snL-jmqGzPiJ9cVnZGkU.jpg?auto=webp&s=2b0544cc34a69eaaa99501108534789292e1e35f',
      precio: 2,
    }];
  }

  addListaSeleccionados($event): void {
    console.log($event);
    this.productosSeleccionados.push($event);
  }
}
