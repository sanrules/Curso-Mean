import { UsuariosService } from './../../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    formRegistro: FormGroup;

    constructor(
        private usuariosService: UsuariosService,
        private router: Router
    ) {
        this.formRegistro = new FormGroup({
            nombre: new FormControl(),
            apellidos: new FormControl(),
            username: new FormControl(),
            password: new FormControl(),
            email: new FormControl()
        });
    }

    ngOnInit(): void {
    }

    onSubmit() {
        this.usuariosService.registrar(this.formRegistro.value)
            .then((response) => {
                if (response.success) {
                    this.router.navigate(['/login']);
                }
            }).catch((err) => {
                console.log(err);
            });
    }



}
