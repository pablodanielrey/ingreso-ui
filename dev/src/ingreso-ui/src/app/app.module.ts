import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { CodigoComponent } from './codigo/codigo.component';
import { FinalizarComponent } from './finalizar/finalizar.component';
import { UsuarioExistenteComponent } from './problemas/usuario-existente/usuario-existente.component';
import { ErrorServidorComponent } from './problemas/error-servidor/error-servidor.component';
import { ContactoComponent } from './problemas/contacto/contacto.component';
import { environment } from '../environments/environment';
import { DniNoExisteComponent } from './problemas/dni-no-existe/dni-no-existe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    CodigoComponent,
    FinalizarComponent,
    UsuarioExistenteComponent,
    ErrorServidorComponent,
    ContactoComponent,
    DniNoExisteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
