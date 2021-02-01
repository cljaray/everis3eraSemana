import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pcr } from '../models/Pcr';
import { ServicioPCRService } from '../services/servicio-pcr.service';

@Component({
  selector: 'app-informacion-examen',
  templateUrl: './informacion-examen.component.html',
  styleUrls: ['./informacion-examen.component.css']
})
export class InformacionExamenComponent implements OnInit {

  

  constructor(public rutaActiva: ActivatedRoute, public pcrService: ServicioPCRService) { }

  ngOnInit(): void {

    this.rutaActiva.params.subscribe(params => 
      this.buscarRut(params.rut)
    )

  }

  buscarRut(rut: string){
    this.pcrService.buscarPorRut(rut).subscribe(pcr => {
      if(pcr){
        this.pcrService.currentPCR = pcr;
      }
    })
  }


}
