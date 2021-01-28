import { Injectable } from '@angular/core';
import { Session } from '../models/Session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private currentSession = new Session();
  
  constructor() { }
  
  setSession(session: Session){
    this.currentSession = session;
  }

  getSession(): Session {
    return this.currentSession;
}

  removeSession(){
    this.currentSession = null;
  }
}
