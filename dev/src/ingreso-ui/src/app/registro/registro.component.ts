import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent implements OnInit {

  n: number = 1;
  procesando: boolean = false;
  form: FormGroup;
  opciones_sexo: string[] = ["Otro","masculino", "femenino"];
  hide: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = fb.group( {
      nombre: [{value: '', disabled: true}],
      apellido: [{value: '', disabled: true}],
      dni: [{value: '', disabled: true}],
      genero: ['',[Validators.required]],
      correo1: ['', [Validators.required, Validators.email]],
      correo2: ['', [Validators.required, Validators.email, this.validar_correos]],
      clave1: ['',[Validators.required]],
      clave2: ['',[Validators.required]]
    }, { validator: [this.validar_correos, this.validar_claves] });
  }

  ngOnInit() {
  }


  validar_correos(f: AbstractControl): null | ValidationErrors {
    return f.value['correo1'] == f.value['correo2'] ? null: {correos: true}
  }

  validar_claves(f:AbstractControl): null | ValidationErrors {
    return f.value['clave1'] == f.value['clave2'] ? null : { claves: true }
  }

  aceptar() {
    if (this.form.invalid) {
      return;
    }
    this.router.navigate(['./codigo']) 
  }


}
