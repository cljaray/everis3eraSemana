import { Injectable } from '@angular/core';
import { Pcr } from '../models/Pcr';
import { DatosFormaService } from './datos-forma.service';
import { ServicioPCRService } from './servicio-pcr.service';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  edadValida: boolean;

  telefonoValido: boolean;

  telefonoSecundarioValido: boolean;

  correoValido: boolean;

  datosActualizarPCR: Pcr;

  ngFormPCR;

  constructor(private servicioPCR: ServicioPCRService, private datosFormaService: DatosFormaService) {
      this.servicioPCR.getValuePCR().subscribe(pcr => {
        if(pcr){
          this.datosActualizarPCR = pcr;
        }
      })
   }  

  validacionForma(forma){
   return forma;

  }

  validacionDatos(){  
   
    if (this.ngFormPCR === undefined || this.ngFormPCR.invalid){
      alert("Porfavor rellenar los campos requeridos")
      return false;
    } else if (!this.edadValida){
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
    }  

    return true;
  }

  validacionDatosActualizar(){  
    console.log(this.ngFormPCR)
    if (this.ngFormPCR === undefined || this.ngFormPCR.invalid){
      alert("Porfavor rellenar los campos requeridos")
      return false;
    } else if (!this.validacionEdadActualizar(this.datosActualizarPCR.edad)){
      alert("Porfavor ingresa una edad valida")
      return false;
    } else if (!this.validacionTelefonoActualizar(this.datosActualizarPCR.telefono)){
      alert("Porfavor ingresa un numero valido")
      return false;
    } else if (!this.validacionTelefonoSecundarioActualizar(this.datosActualizarPCR.telefonoSecundario)){
      alert("Porfavor ingresa un numero secundario valido")
      return false;
    } else if (!this.validacionCorreoActualizar(this.datosActualizarPCR.correo, this.datosActualizarPCR.confirmacionCorreo)){
      alert("Porfavor verificar que tu correo coincida")
      return false;
    }  

    return true;
  }
  



  validacionEdad(edad){

    if((edad.control.value || edad) < 0 || (edad.control.value || edad) > 150){
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
    if(confirmacionCorreo.control.value !== correo){
      return this.correoValido = false;
    }
    return this.correoValido = true;


  }

  validacionEdadActualizar(edad){

    if(edad < 0 || edad > 150){
      return this.edadValida = false;
    }

    return this.edadValida = true;
  }

  validacionTelefonoActualizar(telefono){

    if(telefono){
      if(telefono.toString().length !== 9){
        return this.telefonoValido = false;
      }
      return this.telefonoValido = true;
      
    }

  }

  validacionTelefonoSecundarioActualizar(telefono){

    if(telefono){
      if(telefono.toString().length !== 9){
        return this.telefonoSecundarioValido = false;
      }
      return this.telefonoSecundarioValido = true;
      
    }

  }

  validacionCorreoActualizar(correo, confirmacionCorreo){
    if(confirmacionCorreo !== correo){
      return this.correoValido = false;
    }
    return this.correoValido = true;


  }

  verificarRutExistente(){
    return this.servicioPCR.verificarRutExistente(this.datosFormaService.pcr.rut)
  }
  
}
