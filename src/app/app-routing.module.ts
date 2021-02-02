import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualizarPcrComponent } from './actualizar-pcr/actualizar-pcr.component';
import { AuthGuard } from './auth.guard';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { BusquedaAvanzadaComponent } from './busqueda-avanzada/busqueda-avanzada.component';
import { FormaPCRComponent } from './forma-pcr/forma-pcr.component';
import { GuardarPCRComponent } from './guardar-pcr/guardar-pcr.component';
import { InformacionExamenComponent } from './informacion-examen/informacion-examen.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { LoginComponent } from './login/login.component';
import { MostrarTodosPcrComponent } from './mostrar-todos-pcr/mostrar-todos-pcr.component';

const routes: Routes = [
  { path: "", component: BienvenidaComponent},
  { path:"login", component: LoginComponent },
  { path:"listaExamenes", component: MostrarTodosPcrComponent},
  { path:"ingresar", component: GuardarPCRComponent , canActivate: [AuthGuard] },
  { path:"actualizar", component: ActualizarPcrComponent , canActivate: [AuthGuard] },
  { path:"buscar", component: BusquedaAvanzadaComponent , canActivate: [AuthGuard] },
  { path:"informacion/:rut", component: InformacionExamenComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
