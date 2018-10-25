import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IngresoService } from '../ingreso.service';
import { DatosIngreso } from '../entities/ingreso';

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
  sesion_id: string = null;
  subscriptions: any[] = [];

  constructor(private fb: FormBuilder, 
              private route: ActivatedRoute,
              private service: IngresoService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group( {
      nombre: [{value: '', disabled: true}],
      apellido: [{value: '', disabled: true}],
      dni: [{value: '', disabled: true}],
      genero: ['',[Validators.required]],
      correo1: ['', [Validators.required, Validators.email]],
      correo2: ['', [Validators.required, Validators.email, this.validar_correos]],
      clave1: ['',[Validators.required]],
      clave2: ['',[Validators.required]]
    }, { validator: [this.validar_correos, this.validar_claves] });    

    this.route.paramMap.subscribe(p => {
      this.sesion_id = p.get('sid');
      this.obtener_datos();
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.subscriptions = [];
  }  

  obtener_datos() {
    this.subscriptions.push(this.service.obtener_datos(this.sesion_id)
    .subscribe(r => {
      let info: DatosIngreso =  r;
      this.form.get('nombre').setValue(info.nombre);
      this.form.get('apellido').setValue(info.apellido);
      this.form.get('dni').setValue(info.dni);
      this.form.get('genero').setValue(info.genero);
    }));
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
    let datos = {
      'genero': this.form.get('genero').value,
      'correo': this.form.get('correo1').value,
      'clave': this.form.get('clave1').value   
    };
    
    this.subscriptions.push(this.service.actualizar_datos(this.sesion_id, datos)
    .subscribe(r => {
      if (r['estado'] == 'ok') {
        this.router.navigate(['./codigo/' + this.sesion_id])     
      }
    }, err => {
      console.log(err);
    }))
  }


}
