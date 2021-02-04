import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pcr } from '../models/Pcr';
import { ServicioPCRService } from '../services/servicio-pcr.service';

@Component({
  selector: 'app-modal-confirmacion-borrar',
  templateUrl: './modal-confirmacion-borrar.component.html',
  styleUrls: ['./modal-confirmacion-borrar.component.css']
})
export class ModalConfirmacionBorrarComponent implements OnInit {

  pcr: Pcr;

  constructor(private servicioPCR: ServicioPCRService, private router: Router) { }

  ngOnInit(): void {
    this.servicioPCR.getValuePCR().subscribe(pcr => {
      this.pcr = pcr;
    })
  }

  borrarPCR(){
    this.servicioPCR.borrarPcr(this.pcr.rut).subscribe(respuesta => {
      if(respuesta){
        this.router.navigate(["/listaExamenes"])
      }
    })
    
  }
}
