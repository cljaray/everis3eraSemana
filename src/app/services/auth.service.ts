import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Session } from '../models/Session';
import { SessionService } from './session.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  session = new Session;

  isAuthChecker: boolean;
  

  constructor(private http: HttpClient, private storage: StorageService, private router: Router) { }

  login(username: string, password: string ){
    
    this.http.post(`${environment.urlUserBase}/login`, {username, password}).subscribe(
      (respuesta: any) => {
      if(respuesta){
        this.session.token = respuesta.token
        this.session.username = respuesta.user.username
        this.storage.setCurrentSession(this.session)
        this.isAuthChecker = true;        
        return this.router.navigate(['/listaExamenes'])
      }

       return alert("Este usuario no existe");

    }, error => {
      console.log(error)     
    })
  }

  isAuth(): boolean{
    if(this.storage.getCurrentSession() !== null){
      this.isAuthChecker = true;
      return true;
    }
    return false;

  }

  logout(){
    this.isAuthChecker = false;
    this.storage.logout();
  }


}
