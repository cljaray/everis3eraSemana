import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosFormaService } from '../services/datos-forma.service';
import { ServicioPCRService } from '../services/servicio-pcr.service';

@Component({
  selector: 'app-actualizar-pcr',
  templateUrl: './actualizar-pcr.component.html',
  styleUrls: ['./actualizar-pcr.component.css']
})
export class ActualizarPcrComponent implements OnInit {

  inputBuscarRut: string;

  constructor(private servicioPCR: ServicioPCRService, public datosFormaService: DatosFormaService, private router: Router) { }

  ngOnInit(): void {
  }

  buscarRut(){
    this.servicioPCR.buscarPorRut(this.inputBuscarRut).subscribe(respuesta => {
      console.log(respuesta)
      if(respuesta){
        this.servicioPCR.currentPCR = respuesta;
        return this.router.navigate(["/actualizar"])
      }      
    }, error => {
      console.log(error);
    })
  }

  actualizar(){
    return this.servicioPCR.actualizar(this.servicioPCR.currentPCR.rut, this.servicioPCR.currentPCR).subscribe(pcr => {
      if(pcr){
        this.router.navigate([`/informacion/${pcr.rut}`])
      }
    }, error =>{
      console.log(error)
    })
  }

}
