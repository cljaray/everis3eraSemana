import { Component, OnInit } from '@angular/core';
import { Pcr } from '../models/Pcr';
import { ServicioPCRService } from '../services/servicio-pcr.service';

@Component({
  selector: 'app-buscar-rut',
  templateUrl: './buscar-rut.component.html',
  styleUrls: ['./buscar-rut.component.css']
})
export class BuscarRutComponent implements OnInit {

  inputBuscarRut: string;
  pcr: Pcr;

  constructor(private servicioPCR: ServicioPCRService) { }

  ngOnInit(): void {
  }

  buscarRut(){
    this.servicioPCR.buscarPorRut(this.inputBuscarRut).subscribe(respuesta => {
      console.log(respuesta)
      if(respuesta !== null){
        this.pcr = respuesta;
        return true
      }
      return false;
    }, error => {
      console.log(error)
    })
  }

}
