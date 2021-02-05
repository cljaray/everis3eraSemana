import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pcr } from '../models/Pcr';
import { DatosFormaService } from '../services/datos-forma.service';
import { ServicioPCRService } from '../services/servicio-pcr.service';
import { ValidacionService } from '../services/validacion.service';

@Component({
  selector: 'app-actualizar-pcr',
  templateUrl: './actualizar-pcr.component.html',
  styleUrls: ['./actualizar-pcr.component.css']
})
export class ActualizarPcrComponent implements OnInit {

  pcr: Pcr;

  inputBuscarRut: string;

  constructor(private servicioPCR: ServicioPCRService, 
    public datosFormaService: DatosFormaService, 
    private router: Router,
    private validacion: ValidacionService) { }

  ngOnInit(): void {
    this.servicioPCR.getValuePCR().subscribe(pcr => {
      if(pcr){
        this.pcr = pcr;
      }
    })
  }

  buscarRut(forma){
    forma.submit
    if(forma.valid){
      this.servicioPCR.buscarPorRut(this.inputBuscarRut).subscribe(respuesta => {
        
        if(respuesta){
          this.servicioPCR.setValuePCR(respuesta);
          return this.router.navigate(["/actualizar"])
        } else {
          alert("Rut no encontrado")
        }   
      }, error => {
        console.log(error);
      })
    } else {
      return alert("Porfavor ingresa un rut valido")
    }

  }

  actualizar(){
    if(this.validacion.validacionDatosActualizar()){
      return this.servicioPCR.actualizar(this.pcr.rut, this.pcr).subscribe(pcr => {
        if(pcr){
          const reseteoPCR = new Pcr();

          reseteoPCR.resultado = "pendiente";
          reseteoPCR.altoRiesgo = false;
          this.servicioPCR.setValuePCR(reseteoPCR);
          this.router.navigate([`/informacion/${pcr.rut}`])
        }
      }, error =>{
        console.log(error)
      })
    }
  }

}
