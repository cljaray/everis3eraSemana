import { Component, OnInit } from '@angular/core';
import { Pcr } from '../models/Pcr';
import { DatosFormaService } from '../services/datos-forma.service';
import { ServicioPCRService } from '../services/servicio-pcr.service';

@Component({
  selector: 'app-guardar-pcr',
  templateUrl: './guardar-pcr.component.html',
  styleUrls: ['./guardar-pcr.component.css']
})
export class GuardarPCRComponent implements OnInit {

  pcr = new Pcr();
  nuevoPCR: Pcr;

  constructor(private servicioPCR:ServicioPCRService, private datosFormaService: DatosFormaService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("component destroyed")
  }

  guardar(){    
    this.servicioPCR.guardar(this.pcr).subscribe(respuesta => {
      this.nuevoPCR = respuesta;
    }, error => {
      console.log(error);
    })
  }

}
