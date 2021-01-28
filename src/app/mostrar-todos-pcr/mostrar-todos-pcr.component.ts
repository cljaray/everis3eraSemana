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

  constructor(private servicioPCR: ServicioPCRService) { }

  ngOnInit(): void {
    this.buscar();
  }

  buscar(){
    this.servicioPCR.buscar().subscribe(respuesta => {
      console.log(respuesta);
      this.todosLosPcr = respuesta;
    }, error => {
      console.log(error);
    })
  }

}
