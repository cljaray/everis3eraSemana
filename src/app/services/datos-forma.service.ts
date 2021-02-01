import { Injectable } from '@angular/core';
import { Pcr } from '../models/Pcr';

@Injectable({
  providedIn: 'root'
})
export class DatosFormaService {

  pcr = new Pcr();

  constructor() { }

  setDatosPCR(event){    
    
    
  }
}

