import { Injectable } from '@angular/core';
import { Pcr } from '../models/Pcr';

@Injectable({
  providedIn: 'root'
})
export class DatosFormaService {

  pcr = new Pcr();

  constructor() { }

  setDatosPCR(event){    

    let checkboxValue = {
      'on': true,
      'off':false
    }

    let value = event.target.type === "checkbox" ? checkboxValue[event.target.value] : event.target.value
    
    this.pcr[event.target.name] = value;
  }
}

