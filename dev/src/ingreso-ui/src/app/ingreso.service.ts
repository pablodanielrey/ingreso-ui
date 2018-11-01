import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'
import { Observable } from 'rxjs/internal/Observable';
import { DatosIngreso } from './entities/ingreso';
import { map } from 'rxjs/operators';

const INGRESO_API_URL = environment.ingresoApiUrl

@Injectable()
export class IngresoService {

  constructor(private http: HttpClient) { }

  verificar_dni(dni: string): Observable<any> {
    /*Return: {
      estado: ok|error
      sesion: '23gss3465a'
    }*/
    let apiUrl = `${INGRESO_API_URL}/verificar_dni/${dni}`;
    return this.http.get<any>(apiUrl);
  }

  obtener_datos(sesion: string): Observable<DatosIngreso> {
    let apiUrl = `${INGRESO_API_URL}/datos/${sesion}`;
    return this.http.get<DatosIngreso>(apiUrl).pipe(map(info => new DatosIngreso(info['usuario'])));
  }

  actualizar_datos(sesion: string, usuario: any): Observable<any> {
    let apiUrl = `${INGRESO_API_URL}/datos/${sesion}`;
    return this.http.post<any>(apiUrl, usuario);
  }

  obtener_correo(sesion: string): Observable<string> {
    let apiUrl = `${INGRESO_API_URL}/sesion/${sesion}/correo`;
    return this.http.get<string>(apiUrl);
  }

  confirmar_cambios(sesion: string, codigo: string): Observable<any> {
    let apiUrl = `${INGRESO_API_URL}/datos/${sesion}/confirmar`;
    let data = {
      'codigo': codigo
    }
    return this.http.post<any>(apiUrl, data)
  }
}
