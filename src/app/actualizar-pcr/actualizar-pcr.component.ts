import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pcr } from '../models/Pcr';
import { DatosFormaService } from '../services/datos-forma.service';
import { ServicioPCRService } from '../services/servicio-pcr.service';

@Component({
  selector: 'app-actualizar-pcr',
  templateUrl: './actualizar-pcr.component.html',
  styleUrls: ['./actualizar-pcr.component.css']
})
export class ActualizarPcrComponent implements OnInit {

  pcr: Pcr;

  inputBuscarRut: string;

  constructor(private servicioPCR: ServicioPCRService, public datosFormaService: DatosFormaService, private router: Router) { }

  ngOnInit(): void {
    this.servicioPCR.getValuePCR().subscribe(pcr => {
      if(pcr){
        this.pcr = pcr;
      }
    })
  }

  buscarRut(){
    this.servicioPCR.buscarPorRut(this.inputBuscarRut).subscribe(respuesta => {
      console.log(respuesta)
      if(respuesta){
        this.servicioPCR.setValuePCR(respuesta);
        return this.router.navigate(["/actualizar"])
      }      
    }, error => {
      console.log(error);
    })
  }

  actualizar(){
    return this.servicioPCR.actualizar(this.pcr.rut, this.pcr).subscribe(pcr => {
      if(pcr){
        this.router.navigate([`/informacion/${pcr.rut}`])
      }
    }, error =>{
      console.log(error)
    })
  }

}
