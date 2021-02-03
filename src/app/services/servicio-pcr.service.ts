import { Injectable } from '@angular/core';
import  { HttpClient, HttpParams } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pcr } from '../models/Pcr';

@Injectable({
  providedIn: 'root'
})
export class ServicioPCRService {

  currentPCR: Pcr;

  constructor(private http: HttpClient) { }

  buscar(): Observable<any> {
    return this.http.get(`${environment.urlPcrBase}/pcr/buscarTodosPCR`)
  }

  guardar(pcr: Pcr): Observable<any> {
    return this.http.post(`${environment.urlPcrBase}/pcr/crearPCR`, pcr)
  }

  buscarPorRut(rut: string): Observable<any> {
    const parametros = new HttpParams().set("rut", rut);
    return this.http.get(`${environment.urlPcrBase}/pcr/buscarPorRut`, { params : parametros })
  }

  buscarPorComuna(comuna: string): Observable<any>{
    const parametros = new HttpParams().set("comuna", comuna);
    return this.http.get(`${environment.urlPcrBase}/pcr/buscarPorComuna`, { params : parametros })
  }

  buscarPorResultado(resultado: string): Observable<any>{
    const parametros = new HttpParams().set("resultado", resultado);
    return this.http.get(`${environment.urlPcrBase}/pcr/checkearResultado`, { params : parametros })
  }
  
  pacientesAltoRiesgo(): Observable<any>{
    return this.http.get(`${environment.urlPcrBase}/pcr/pacientesAltoRiesgo`)
  }
  


  actualizar(rut: string, pcr: Pcr): Observable<any> {
    const parametros = new HttpParams().set("rut", rut);
    return this.http.put(`${environment.urlPcrBase}/pcr/actualizarPCR/${rut}`, pcr)
  }


}
