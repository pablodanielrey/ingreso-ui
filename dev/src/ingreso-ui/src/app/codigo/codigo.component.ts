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
    });    
  }

  aceptar() {
    if (this.form.invalid) {
      return;
    }
    let codigo = this.form.get('codigo').value;
    this.subscriptions.push(this.service.confirmar_cambios(this.sesion_id, codigo)
    .subscribe( r => {
      if (r['estado'] == 'ok') {
        this.router.navigate(['./finalizar'])
      }
    }));
  }

}
