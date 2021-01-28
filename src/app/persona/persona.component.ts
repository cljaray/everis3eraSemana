import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona'; 
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {


  persona: Persona = new Persona(); //Persona tambien esta implicito  

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.persona.nombre = "";
    this.persona.apellido = "";
    this.persona.direccion = "";
    this.persona.edad = 0;


    this.personaService.buscar().subscribe(respuesta => {
      console.log(respuesta);
    })

    

  }

  guardar(){


    let infoPersona = {
      nombre: this.persona.nombre, 
      apellido: this.persona.apellido, 
      direccion: this.persona.direccion, 
      edad: this.persona.edad
    }

    this.personaService.guardar().subscribe(respuesta => {
      console.log(respuesta)
    }, error => {
      console.log(error)
    });
  }

}
