import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pcr } from '../models/Pcr';
import { DatosFormaService } from '../services/datos-forma.service';
import { ServicioPCRService } from '../services/servicio-pcr.service';

@Component({
  selector: 'app-informacion-examen',
  templateUrl: './informacion-examen.component.html',
  styleUrls: ['./informacion-examen.component.css']
})
export class InformacionExamenComponent implements OnInit {

  pcr = new Pcr();

  constructor(public rutaActiva: ActivatedRoute, 
    public pcrService: ServicioPCRService, 
    private router: Router,
    public datosForma: DatosFormaService
    ) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(params => 
      this.buscarRut(params.rut)
    )

    this.pcrService.getValuePCR().subscribe(pcr => {
      if(pcr){
        this.pcr = pcr;
      } 
     }
    )

  }

  buscarRut(rut: string){
    this.pcrService.buscarPorRut(rut).subscribe(pcr => {
      console.log(pcr)
      if(pcr){
        this.pcrService.setValuePCR(pcr);
      }
    })
  }

  actualizarPcr(){
    this.router.navigate(["/actualizar"])
  }

}
