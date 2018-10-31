import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IngresoService } from '../ingreso.service'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  procesando: boolean = false;
  form: FormGroup;
  subscriptions: any[] = [];

  constructor(private fb: FormBuilder, 
              private router: Router,
              private service: IngresoService) {
    this.form = fb.group({
      dni: ['', [Validators.required]]
    });      
   }

  ngOnInit() {
    this.procesando = false;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.subscriptions = [];
  }


  aceptar() {
    if (this.form.invalid) {
      return;
    }

    this.procesando = true;

    this.subscriptions.push(this.service.verificar_dni(this.form.get('dni').value)
    .subscribe(r => {
      this.procesando = false;
      if ('sesion' in r) {
        this.router.navigate(['./registro/' + r['sesion']])    
      }
    }, err => {
      this.procesando = false;
      if ('error' in err && err.error == "no permitido") {
        this.router.navigate(['/problemas/dni-no-existe/' + this.form.get('dni').value]);
        return;
      }
      if ('error' in err && err.error == "el usuario ya fue registrado") {
        this.router.navigate(['/problemas/usuario-existente/' + this.form.get('dni').value]);
        return;
      } 
      this.router.navigate(['/problemas/error-servidor']);
    }));

    
  }

}
