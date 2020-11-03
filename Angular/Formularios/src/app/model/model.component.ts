import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      edad: new FormControl('', [
        this.edadValidator
      ]),
      email: new FormControl('', [
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]
      ),
      dni: new FormControl('', [
        this.dniValidator
      ]),
      password: new FormControl(),
      passwordRepeat: new FormControl()
    }, [
      this.passwordValidator
    ]);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.formulario.value);
  }

  edadValidator(control): any {
    const value = control.value;
    const min = 18;
    const max = 65;
    if (value >= min && value <= max) {
      return null;
    } else {
      return { edadvalidator: { min, max } };
    }
  }

  dniValidator(control): any {
    const dni = control.value;
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (/^\d{8}[a-zA-Z]$/.test(dni)) {
      const numero = dni.substr(0, dni.length - 1);
      const letr = dni.substr(dni.length - 1, 1);
      const resto = numero % 23;

      if (letras.substring(resto, resto + 1) !== letr.toUpperCase()) {
        return { dnivalidator: 'La letra no coincide' };
      } else {
        return null;
      }
    } else {
      return { dnivalidator: 'El formato es erróneo' };
    }
  }

  passwordValidator(form: FormGroup): any {
    const passwordValue = form.get('password').value;
    const passwordRepeatValue = form.get('passwordRepeat').value;

    if (passwordRepeatValue === passwordValue) {
      return null;
    } else {
      const error = { passwordvalidator: 'Las contraseñas no coinciden' };
      form.get('passwordRepeat').setErrors(error);
      return error;
    }
  }

}
