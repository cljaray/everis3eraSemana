import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private servicioPCR: ServicioPCRService, public datosFormaService: DatosFormaService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url === "/actualizar")
    if(this.router.url === "/actualizar" && this.servicioPCR.currentPCR){
     this.pcr = this.servicioPCR.currentPCR;
    } else if(this.datosFormaService.pcr) {
      this.pcr = this.datosFormaService.pcr;
    }

  }

  addToPcrService(event){   
    this.datosFormaService.setDatosPCR(event);
  }


  validacionForma(form){
    console.log(form)
    if(form.invalid){
      return alert("porfavor rellena los campos")
    }

  }
  
}
