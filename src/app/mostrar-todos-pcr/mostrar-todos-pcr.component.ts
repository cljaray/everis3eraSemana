import { Component, OnInit } from '@angular/core';
import { Pcr } from '../models/Pcr';
import { ServicioPCRService } from '../services/servicio-pcr.service';

@Component({
  selector: 'app-mostrar-todos-pcr',
  templateUrl: './mostrar-todos-pcr.component.html',
  styleUrls: ['./mostrar-todos-pcr.component.css']
})
export class MostrarTodosPcrComponent implements OnInit {

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
