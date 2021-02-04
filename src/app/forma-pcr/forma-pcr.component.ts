import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Pcr } from '../models/Pcr';
import { DatosFormaService } from '../services/datos-forma.service';
import { ServicioPCRService } from '../services/servicio-pcr.service';
import { ValidacionService } from '../services/validacion.service';

@Component({
  selector: 'app-forma-pcr',
  templateUrl: './forma-pcr.component.html',
  styleUrls: ['./forma-pcr.component.css']
})
export class FormaPCRComponent implements OnInit {

  pcr = new Pcr();
  
  inputBuscarRut: string;
  
  todosLosPCR: Pcr[];

  

  
  constructor(private servicioPCR: ServicioPCRService, 
    public datosFormaService: DatosFormaService, 
    private router: Router,
    public validacion: ValidacionService) { }

  ngOnInit(): void {

    if(this.router.url === "/actualizar"){
      this.servicioPCR.getValuePCR().subscribe(pcr => {
        this.pcr = pcr;

      })
    } else if(this.datosFormaService.pcr) {

      this.pcr = this.datosFormaService.pcr;
      this.pcr.altoRiesgo = false;
      this.pcr.resultado = "pendiente"
    }

  }

  validacionCorreo(confirmacionCorreo){
    this.validacion.validacionCorreo(this.pcr.correo, confirmacionCorreo)
  }

  pruebaChange(forma){
    this.validacion.ngFormPCR = forma;
    console.log(forma);
  }
 

}
