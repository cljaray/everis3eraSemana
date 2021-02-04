import { AfterViewInit, Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private autorizacion: AuthService, private router:Router) { }

  ngOnInit(): void {
    /* agregar isAuth y navigate */
    if(this.autorizacion.isAuth()){
        this.router.navigate(["/listaExamenes"]);
    }     

  }

  login(){
    this.autorizacion.login(this.username, this.password)    
  }



}
