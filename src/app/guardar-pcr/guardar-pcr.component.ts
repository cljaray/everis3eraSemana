import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormaPCRComponent } from '../forma-pcr/forma-pcr.component';
import { Pcr } from '../models/Pcr';
import { DatosFormaService } from '../services/datos-forma.service';
import { ServicioPCRService } from '../services/servicio-pcr.service';

@Component({
  selector: 'app-guardar-pcr',
  templateUrl: './guardar-pcr.component.html',
  styleUrls: ['./guardar-pcr.component.css']
})
export class GuardarPCRComponent implements AfterViewInit {

  @ViewChild(FormaPCRComponent) datosPcr: Pcr;
  pcr = new Pcr();
  nuevoPCR: Pcr;

  constructor(private servicioPCR:ServicioPCRService, private datosFormaService: DatosFormaService, private router: Router) { }

  ngAfterViewInit(): void {
    this.datosPcr = this.datosPcr
  }

  ngOnDestroy(): void {
    console.log("component destroyed")
  }

  guardar(){  
    this.servicioPCR.guardar(this.datosFormaService.pcr).subscribe(respuesta => {
      if(respuesta){
        this.nuevoPCR = respuesta;
        this.router.navigate([`/informacion/${respuesta.rut}`]);
      }
      
    }, error => {
      console.log(error);
  })
   
} 

}


