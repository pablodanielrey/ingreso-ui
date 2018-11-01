import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IngresoService } from '../ingreso.service';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.component.html',
  styleUrls: ['./codigo.component.scss']
})
export class CodigoComponent implements OnInit {

  procesando: boolean = false;
  error_codigo: boolean = false;
  form: FormGroup;
  sesion_id: string = null;
  subscriptions: any[] = [];
  correo: string = '';

  constructor(private fb: FormBuilder, 
    private route: ActivatedRoute,
    private service: IngresoService,
    private router: Router) {    
    }

  ngOnInit() {    
    this.form = this.fb.group({
      codigo: ['', [Validators.required]]
    });      
    this.route.paramMap.subscribe(p => {
      this.sesion_id = p.get('sid');
      this.obtener_correo(this.sesion_id);
    });    
  }

  obtener_correo(sid: string) {
    this.procesando = true;
    this.subscriptions.push(this.service.obtener_correo(sid)
    .subscribe( r => {
      console.log(r);
      this.correo = r;
      this.procesando = false;
    }, err => {
      this.procesando = false;
      this.router.navigate(['/problemas/error-servidor']);
    }));
  }

  aceptar() {
    this.error_codigo = false;
    if (this.form.invalid) {
      return;
    }

    let codigo = this.form.get('codigo').value;
    this.procesando = true;    
    this.subscriptions.push(this.service.confirmar_cambios(this.sesion_id, codigo)
    .subscribe( r => {
      this.procesando = false;
      if (r['estado'] == 'ok') {
        this.router.navigate(['./finalizar'])
      }
    }, err => {
      this.procesando = false;      
      if ('error' in err && err.error == "código incorrecto") {
        this.form.setErrors({codigo: true});
        this.error_codigo = true;
      } else {
        this.router.navigate(['/problemas/error-servidor']);
      }      
    }));
  }

}
