import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { CodigoComponent } from './codigo/codigo.component';
import { FinalizarComponent } from './finalizar/finalizar.component';
import { UsuarioExistenteComponent } from './problemas/usuario-existente/usuario-existente.component';
import { ErrorServidorComponent } from './problemas/error-servidor/error-servidor.component';
import { ContactoComponent } from './problemas/contacto/contacto.component';
import { DniNoExisteComponent } from './problemas/dni-no-existe/dni-no-existe.component';




const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'registro/:sid', component: RegistroComponent },
  { path: 'codigo/:sid', component: CodigoComponent },
  { path: 'finalizar', component: FinalizarComponent },
  { path: 'problemas',
      children: [
      { path: 'usuario-existente/:dni', component: UsuarioExistenteComponent },
      { path: 'dni-no-existe/:dni', component: DniNoExisteComponent },
      { path: 'error-servidor', component: ErrorServidorComponent },
      { path: 'contacto', component: ContactoComponent }
      ]
  },



  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
]

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
