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
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.subscriptions = [];
  }


  aceptar() {
    if (this.form.invalid) {
      return;
    }

    this.subscriptions.push(this.service.verificar_dni(this.form.get('dni').value)
    .subscribe(r => {
      console.log(r);
      if ('sesion' in r) {
        this.router.navigate(['./registro/' + r['sesion']])    
      }
    }));

    
  }

}
