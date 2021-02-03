import { Component, OnInit } from '@angular/core';
import { Pcr } from '../models/Pcr';
import { ServicioPCRService } from '../services/servicio-pcr.service';

@Component({
  selector: 'app-busqueda-avanzada',
  templateUrl: './busqueda-avanzada.component.html',
  styleUrls: ['./busqueda-avanzada.component.css']
})
export class BusquedaAvanzadaComponent implements OnInit {

  
  todosLosPcr: Pcr[];
  busqueda: string;
  mostrarBusqueda = true;
  
  nombreBusqueda = "Rut";
  filtroBusqueda = "rut";
  filtroMetodos = "rut";

  configBusqueda = {
    rut: "rut",
    comuna:"comunaDeResidencia",
    resultado:"resultado",
    altoRiesgo:"altoRiesgo", 
    nombre: "nombre"
  }

  configMetodos = {
    rut: () => this.buscarPorRut(),
    comuna: () => this.buscarPorComuna(),
    nombre: () => this.buscarPorNombreApellido
  }


  constructor(private servicioPCR: ServicioPCRService) { }


  ngOnInit(): void {
    this.buscar();
  }

  buscar(){
    this.servicioPCR.buscar().subscribe(respuesta => {
      console.log(this.busqueda)
      console.log(respuesta);
      this.todosLosPcr = respuesta;
    }, error => {
      console.log(error);
    })
  }

  buscarPorRut(){
    this.servicioPCR.buscarPorRut(this.busqueda).subscribe(rut => {
      console.log(rut);
      const nuevaListaPCR = [];

      if(rut){
  
        nuevaListaPCR.push(rut);  
        return this.todosLosPcr = nuevaListaPCR;

      }

      this.todosLosPcr = nuevaListaPCR;
      

    }, error => {
      console.log(error)
    })
  }

  buscarPorComuna(){
    this.servicioPCR.buscarPorComuna(this.busqueda).subscribe(comunas => {
      console.log(comunas)
      if(comunas){
        this.todosLosPcr = comunas
      }
    })
  }

  buscarPorNombreApellido(){

  }

  buscarPorResultado(evento){
    this.setFiltroBusqueda(evento);
    this.servicioPCR.buscarPorResultado(evento.target.dataset.resultado).subscribe(resultados => {
      console.log(resultados);
      if(resultados){
        this.todosLosPcr = resultados;
      }
    });
  }

  buscarPacientesAltoRiesgo(evento){
    this.setFiltroBusqueda(evento)
    
    this.servicioPCR.pacientesAltoRiesgo().subscribe(altoRiesgo => {
      console.log(altoRiesgo)
      if(altoRiesgo){
        this.todosLosPcr = altoRiesgo;
      }
    })
  }


  setFiltroBusqueda(evento){
    this.nombreBusqueda = evento.target.dataset.nombre;
    this.filtroBusqueda = this.configBusqueda[evento.target.value];
    this.filtroMetodos = evento.target.value;
    console.log(this.nombreBusqueda)
    console.log(this.filtroBusqueda)
    this.setMostrarBusqueda();
  }

  setMostrarBusqueda(){
    if(this.filtroBusqueda === "resultado" || this.filtroBusqueda === "altoRiesgo"){
      return this.mostrarBusqueda = false;
    } 
    return this.mostrarBusqueda = true;
  }

}
