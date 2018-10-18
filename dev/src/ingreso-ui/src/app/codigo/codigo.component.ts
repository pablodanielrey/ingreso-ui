import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.component.html',
  styleUrls: ['./codigo.component.scss']
})
export class CodigoComponent implements OnInit {

  procesando: boolean = false;
  error_codigo: boolean = false;
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      codigo: ['', [Validators.required]]
    });
  }


  ngOnInit() {
  }

  aceptar() {
    if (this.form.invalid) {
      return;
    }

    this.router.navigate(['./finalizar'])
  }

}
