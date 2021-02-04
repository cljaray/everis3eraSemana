import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormaPCRComponent } from './forma-pcr/forma-pcr.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { GuardarPCRComponent } from './guardar-pcr/guardar-pcr.component';
import { ActualizarPcrComponent } from './actualizar-pcr/actualizar-pcr.component';
import { BuscarRutComponent } from './buscar-rut/buscar-rut.component';
import { MostrarTodosPcrComponent } from './mostrar-todos-pcr/mostrar-todos-pcr.component';
import { AuthService } from './services/auth.service';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { InformacionExamenComponent } from './informacion-examen/informacion-examen.component';
import { BusquedaAvanzadaComponent } from './busqueda-avanzada/busqueda-avanzada.component';
import { ModalConfirmacionBorrarComponent } from './modal-confirmacion-borrar/modal-confirmacion-borrar.component';
import { ServicioPCRService } from './services/servicio-pcr.service';
import { DatosFormaService } from './services/datos-forma.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormaPCRComponent,
    IngresarComponent,
    LoginComponent,
    MenuComponent,
    GuardarPCRComponent,
    ActualizarPcrComponent,
    BuscarRutComponent,
    MostrarTodosPcrComponent,
    BienvenidaComponent,
    InformacionExamenComponent,
    BusquedaAvanzadaComponent,
    ModalConfirmacionBorrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, AuthService, ServicioPCRService, DatosFormaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
