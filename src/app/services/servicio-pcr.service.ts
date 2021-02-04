import { Injectable } from '@angular/core';
import  { HttpClient, HttpParams } from  '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pcr } from '../models/Pcr';

@Injectable({
  providedIn: 'root'
})
export class ServicioPCRService {

  private currentPCR: BehaviorSubject<any>;

  constructor(private http: HttpClient) { 
    this.currentPCR = new BehaviorSubject<any>(null);
  }

  setValuePCR(pcr){
    this.currentPCR.next(pcr);
  }

  getValuePCR(): Observable<any>{
    return this.currentPCR.asObservable();
  }


  buscar(): Observable<any> {
    return this.http.get(`${environment.urlPcrBase}/pcr/buscarTodosPCR`)
  }

  guardar(pcr: Pcr): Observable<any> {
    return this.http.post(`${environment.urlPcrBase}/pcr/crearPCR`, pcr)
  }

  buscarPorRut(rut: string): Observable<any> {
    return this.http.get(`${environment.urlPcrBase}/pcr/buscarPorRut/${rut}`)
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

  buscarPorNombreApellido(nombre: string, apellido: string): Observable<any>{
    const parametros = new HttpParams().set("nombre", nombre).set("apellido", apellido);
    
    return this.http.get(`${environment.urlPcrBase}/pcr/buscarNombreApellido`, { params: parametros })
  }
  
  borrarPcr(rut){
    return this.http.delete(`${environment.urlPcrBase}/pcr/eliminarPCR/${rut}`);
  }

  actualizar(rut: string, pcr: Pcr): Observable<any> {
    const parametros = new HttpParams().set("rut", rut);
    return this.http.put(`${environment.urlPcrBase}/pcr/actualizarPCR/${rut}`, pcr)
  }


}
