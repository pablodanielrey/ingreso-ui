import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  n: number = 1;
  procesando: boolean = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group( {
      nombre: '',
      apellido: '',
      dni: ''
    });
  }

  ngOnInit() {
  }

}
