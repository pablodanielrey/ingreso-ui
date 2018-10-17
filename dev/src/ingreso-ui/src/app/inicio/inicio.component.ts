import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  procesando: boolean = false;
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      dni: ['', [Validators.required]]
    });      
   }

  ngOnInit() {
  }

  aceptar() {
    if (this.form.invalid) {
      return;
    }

    this.router.navigate(['./registro'])    
  }

}
