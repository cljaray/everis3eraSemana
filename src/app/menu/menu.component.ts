import { Component, OnInit } from '@angular/core';
import { Session } from '../models/Session';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  constructor(public auth: AuthService) { }
  
  
  ngOnInit(): void {    
    this.auth.isAuth();
    console.log(this.auth.isAuthChecker)
  }

  logout(){    
    this.auth.logout();
  }

}
