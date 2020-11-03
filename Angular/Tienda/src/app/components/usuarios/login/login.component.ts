import { UsuariosService } from './../../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
  }

  async onSubmit(formValue) {
    try {
      const response = await this.usuarioService.login(formValue);
      if (response.success) {
        localStorage.setItem('tienda_token', response.token);
      }
      console.log(response.token);
    } catch (error) {
      console.log(error);
    }
  }

}
