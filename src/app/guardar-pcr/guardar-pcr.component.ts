import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { FormaPCRComponent } from '../forma-pcr/forma-pcr.component';
import { Pcr } from '../models/Pcr';
import { DatosFormaService } from '../services/datos-forma.service';
import { ServicioPCRService } from '../services/servicio-pcr.service';
import { ValidacionService } from '../services/validacion.service';

@Component({
  selector: 'app-guardar-pcr',
  templateUrl: './guardar-pcr.component.html',
  styleUrls: ['./guardar-pcr.component.css']
})
export class GuardarPCRComponent implements AfterViewInit  {

  @ViewChildren('pcrForm') pcrForm;
  
  pcr = new Pcr();
  nuevoPCR: Pcr;

  constructor(private servicioPCR:ServicioPCRService, 
    private datosFormaService: DatosFormaService, 
    private router: Router,
    public validacion: ValidacionService) { }


  ngAfterViewInit(){
    console.log(this.pcrForm);
  }

  guardar(){  
    if(this.validacion.validacionDatos()){
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

}


