import { Component, OnInit } from '@angular/core';
import { DatosFormaService } from '../services/datos-forma.service';
import { ServicioPCRService } from '../services/servicio-pcr.service';

@Component({
  selector: 'app-actualizar-pcr',
  templateUrl: './actualizar-pcr.component.html',
  styleUrls: ['./actualizar-pcr.component.css']
})
export class ActualizarPcrComponent implements OnInit {

  inputBuscarRut: string;

  constructor(private servicioPCR: ServicioPCRService, public datosFormaService: DatosFormaService) { }

  ngOnInit(): void {
  }

  buscarRut(){
    this.servicioPCR.buscarPorRut(this.inputBuscarRut).subscribe(respuesta => {
      console.log(respuesta)
      if(respuesta){
        return this.datosFormaService.pcr = respuesta;
      }      
    }, error => {
      console.log(error);
    })
  }

  actualizar(){
    return this.servicioPCR.actualizar(this.datosFormaService.pcr.rut, this.datosFormaService.pcr).subscribe(respuesta => {
      console.log(JSON.stringify(this.datosFormaService.pcr))
      console.log(respuesta)
    }, error =>{
      console.log(error)
    })
  }

}
