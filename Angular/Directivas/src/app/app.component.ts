import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  estilosParrafo: any;
  activaClase: boolean;

  constructor() {
    this.estilosParrafo = {
      color: 'indigo',
      backgroundColor: 'tomato'
    };

    this.activaClase = true;
  }

  ngOnInit(): void {
    setInterval(() => this.activaClase = !this.activaClase, 2000);
  }

  cambiaColor(pColor: string): void {
    this.estilosParrafo.color = pColor;
  }

  onInput($event): void {
    this.estilosParrafo.backgroundColor = $event.target.value;
    console.log($event.target.value);
  }

  onInputRange($event): void {
    this.estilosParrafo.fontSize = `${$event.target.value}px`;
  }

}
