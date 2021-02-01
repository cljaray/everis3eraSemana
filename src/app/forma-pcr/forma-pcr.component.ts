import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
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
  
  constructor(private servicioPCR: ServicioPCRService, public datosFormaService: DatosFormaService) { }

  ngOnInit(): void {
  }

  addToPcrService(event){   
    this.datosFormaService.setDatosPCR(event);
  }

  actualizar(){
    return this.servicioPCR.actualizar(this.datosFormaService.pcr.rut, this.datosFormaService.pcr).subscribe(respuesta => {
      console.log(respuesta)
    }, error =>{
      console.log(error)
    })
  }

  log(value){
    console.log(value)
  }

  validacionForma(form){
    console.log(form)
    if(form.invalid){
      return alert("porfavor rellena los campos")
    }

  }
  
}
