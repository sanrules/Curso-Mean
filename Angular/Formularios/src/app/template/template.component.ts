import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  @ViewChild('botonSegundo') btnSeg: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formValues: any): void {
    console.log(formValues);
  }

  recuperarBotones(): void {
    const botonPrimero = document.getElementById('botonPrimero');
    console.log(botonPrimero);
    botonPrimero.style.backgroundColor = 'red';

    const btnPrimero = document.querySelector('#botonPrimero');
    console.log(btnPrimero);

    console.log(this.btnSeg);
    this.btnSeg.nativeElement.style.backgroundColor = 'green';

  }

}
