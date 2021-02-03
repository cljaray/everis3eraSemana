import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../models/Session';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private router: Router, private session: SessionService) { }

  setCurrentSession(session: Session): void{
    this.session.setSession(session)
    localStorage.setItem('currentUser', JSON.stringify(session));
  }

  getCurrentSession(){
    return localStorage.getItem("currentUser");
  }
  
  logout() {
    localStorage.removeItem("currentUser");
    this.session.removeSession()
    this.router.navigate(['/']);
  }

}
