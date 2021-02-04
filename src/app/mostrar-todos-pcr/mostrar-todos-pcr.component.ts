import { Component, OnInit } from '@angular/core';
import { Pcr } from '../models/Pcr';
import { ServicioPCRService } from '../services/servicio-pcr.service';
import { ValidacionService } from '../services/validacion.service';

@Component({
  selector: 'app-mostrar-todos-pcr',
  templateUrl: './mostrar-todos-pcr.component.html',
  styleUrls: ['./mostrar-todos-pcr.component.css']
})
export class MostrarTodosPcrComponent implements OnInit {

  todosLosPcr: Pcr[];
  busquedaRut: string;

  constructor(private servicioPCR: ServicioPCRService, public validacion: ValidacionService) { }


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

  buscarPorRut(forma){

    if(forma.valid){
      this.servicioPCR.buscarPorRut(this.busquedaRut).subscribe(rut => {
  
        const nuevaListaPCR = [];
  
        if(rut){
          nuevaListaPCR.push(rut);
    
          return this.todosLosPcr = nuevaListaPCR;
  
        }
  
        this.todosLosPcr = nuevaListaPCR;
  
      }, error => {
        console.log(error)
      })
    } else {
      alert("Porfavor ingresa un rut valido");
    }
    

  }

  resetearLista(event){
    console.log(event)
    if(event.length === 0){
      this.buscar();
    }
  }

}
