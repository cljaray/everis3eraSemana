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

    
  }

  buscarRut(rut: string){
    this.pcrService.buscarPorRut(rut).subscribe(pcr => {
      console.log(pcr)
      if(pcr){
        this.pcr = pcr;        
      }
    })
  }

  actualizarPcr(){
    this.pcrService.setValuePCR(this.pcr)
    this.router.navigate(["/actualizar"])
  }

  formatoFecha(fechaPcr){
    
    const fecha = new Date(fechaPcr);
    
    const dia = fecha.getDay() < 0 ? fecha.getDay() : `0${fecha.getDay()}`;
    const mes = fecha.getMonth() + 1 < 0 ? fecha.getMonth() + 1 : `0${fecha.getMonth() + 1}`;;
    const año = fecha.getFullYear();

    const fechaFormateada = `${dia}/${mes}/${año}`

    return fechaFormateada;
    
  }

}
