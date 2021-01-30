import { AfterViewInit, Component, OnInit,  } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private autorizacion: AuthService) { }

  ngOnInit(): void {
    /* agregar isAuth y navigate */
  }

  login(){
    this.autorizacion.login(this.username, this.password)    
  }



}
