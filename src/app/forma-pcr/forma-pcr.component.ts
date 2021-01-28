import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pcr } from '../models/Pcr';
import { DatosFormaService } from '../services/datos-forma.service';
import { ServicioPCRService } from '../services/servicio-pcr.service';

@Component({
  selector: 'app-forma-pcr',
  templateUrl: './forma-pcr.component.html',
  styleUrls: ['./forma-pcr.component.css']
})
export class FormaPCRComponent implements OnInit {

  pcr = new Pcr();

  inputBuscarRut: string;

  todosLosPCR: Pcr[];

  constructor(private servicioPCR: ServicioPCRService, private datosFormaService: DatosFormaService) { }

  

  ngOnInit(): void {
  }

  addToPcrService(event){   
    this.datosFormaService.setDatosPCR(event);
  }

  
  guardarOActualizar(){
    this.servicioPCR.buscarPorRut(this.pcr.rut).subscribe(respuesta => {
      if(respuesta !== null){        
        return this.actualizar()
      }
      return false
    })
   
  }

  actualizar(){
    return this.servicioPCR.actualizar(this.pcr.rut, this.pcr).subscribe(respuesta => {
      console.log(respuesta)
    }, error =>{
      console.log(error)
    })
  }

  

  
}
