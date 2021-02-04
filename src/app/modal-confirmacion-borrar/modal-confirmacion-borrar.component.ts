import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioPCRService } from '../services/servicio-pcr.service';

@Component({
  selector: 'app-modal-confirmacion-borrar',
  templateUrl: './modal-confirmacion-borrar.component.html',
  styleUrls: ['./modal-confirmacion-borrar.component.css']
})
export class ModalConfirmacionBorrarComponent implements OnInit {

  constructor(private servicioPCR: ServicioPCRService, private router: Router) { }

  ngOnInit(): void {
  }

  borrarPCR(){
    this.servicioPCR.borrarPcr().subscribe(respuesta => {
      if(respuesta){
        this.router.navigate(["/listaExamenes"])
      }
    })
    
  }
}
