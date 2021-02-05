import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pcr } from '../models/Pcr';
import { ServicioPCRService } from '../services/servicio-pcr.service';

@Component({
  selector: 'app-modal-confirmacion-borrar',
  templateUrl: './modal-confirmacion-borrar.component.html',
  styleUrls: ['./modal-confirmacion-borrar.component.css']
})
export class ModalConfirmacionBorrarComponent implements OnInit {

  pcr: Pcr;

  rut: string;

  constructor(private servicioPCR: ServicioPCRService, private router: Router, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(params => {
      console.log(params)
        if(params){
          this.rut = params.rut
        }
      }
      
    )
  }

  borrarPCR(){
    this.servicioPCR.borrarPcr(this.rut).subscribe(respuesta => {
      if(respuesta){
        this.router.navigate(["/listaExamenes"])
      }
    })
    
  }
}
