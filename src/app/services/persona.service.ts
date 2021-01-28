import { Injectable } from '@angular/core';
import  { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  buscar(): Observable<any> {
    return this.http.get('http://localhost:8080/pcr/buscarTodosPCR')
  }

  

  guardar(): Observable<any> {
    console.log("guardar")
    const info: any ={
      "altoRiesgo": false,
      "apellido": "Vargas",
      "comunaDeResidencia": "string",
      "confirmacionCorreo": "string",
      "correo": "string",
      "direccion": "string",
      "edad": 29,     
      "hora": "11:11",
      "locacion": "string",
      "nombre": "Manuel",
      "numeroEmergencia": 123456789,
      "numeroTelefono": 123456789,
      "residencia": "string",
      "resultado": "pendiente",
      "rut": "18.017.098-9"
    }
    return this.http.post('http://localhost:8080/pcr/crearPCR', info)
  }

}
