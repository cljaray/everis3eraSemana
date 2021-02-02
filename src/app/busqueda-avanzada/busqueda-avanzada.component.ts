import { Component, OnInit } from '@angular/core';
import { Pcr } from '../models/Pcr';
import { ServicioPCRService } from '../services/servicio-pcr.service';

@Component({
  selector: 'app-busqueda-avanzada',
  templateUrl: './busqueda-avanzada.component.html',
  styleUrls: ['./busqueda-avanzada.component.css']
})
export class BusquedaAvanzadaComponent implements OnInit {

  
  todosLosPcr: Pcr[];
  busquedaRut: string;

  constructor(private servicioPCR: ServicioPCRService) { }


  ngOnInit(): void {
    this.buscar();
  }

  buscar(){
    this.servicioPCR.buscar().subscribe(respuesta => {
      console.log(this.busquedaRut)
      console.log(respuesta);
      this.todosLosPcr = respuesta;
    }, error => {
      console.log(error);
    })
  }

  buscarPorRut(){
    this.servicioPCR.buscarPorRut(this.busquedaRut).subscribe(rut => {
      console.log(rut)
      this.todosLosPcr = rut
    }, error => {
      console.log(error)
    })
  }



}
