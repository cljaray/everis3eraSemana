import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  edadValida: boolean;

  telefonoValido: boolean;

  telefonoSecundarioValido: boolean;

  correoValido: boolean;

  ngFormPCR;

  constructor() { }  

  validacionForma(forma){
   return forma;

  }

  validacionDatos(){  
   
    if (!this.edadValida){
      alert("Porfavor ingresa una edad valida")
      return false;
    } else if (!this.telefonoValido){
      alert("Porfavor ingresa un numero valido")
      return false;
    } else if (!this.telefonoSecundarioValido){
      alert("Porfavor ingresa un numero secundario valido")
      return false;
    } else if (!this.correoValido){
      alert("Porfavor verificar que tu correo coincida")
      return false;
    }  if (this.ngFormPCR === undefined || this.ngFormPCR.invalid){
      alert("Porfavor rellenar los campos requeridos")
      return false;
    } 

    return true;
  }
  
  validacionEdad(edad){

    if(edad.control.value < 0 || edad.control.value > 150){
      return this.edadValida = false;
    }

    return this.edadValida = true;
  }

  validacionTelefono(telefono){

    if(telefono){
      if(telefono.control.value.toString().length !== 9){
        return this.telefonoValido = false;
      }
      return this.telefonoValido = true;
      
    }

  }

  validacionTelefonoSecundario(telefono){

    if(telefono){
      if(telefono.control.value.toString().length !== 9){
        return this.telefonoSecundarioValido = false;
      }
      return this.telefonoSecundarioValido = true;
      
    }

  }

  validacionCorreo(correo, confirmacionCorreo){
    console.log(confirmacionCorreo !== correo)
    console.log(correo)
    console.log(confirmacionCorreo)
    if(confirmacionCorreo.control.value !== correo){
      return this.correoValido = false;
    }
    return this.correoValido = true;


  }
}
