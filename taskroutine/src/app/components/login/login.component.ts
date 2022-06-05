import { Component, OnInit } from '@angular/core';
import { LoginViewModel } from 'src/app/models/login-view-model';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
  loginViewModel: LoginViewModel = new LoginViewModel();   //creating a new object of loginViewModel 
  loginError: string = "";

  constructor(private loginService: LoginService, private router: Router) 
  {
  }

  ngOnInit()
  {
  }

  onLoginClick(event: any)
  {
    this.loginService.Login(this.loginViewModel).subscribe(
      (response) =>     //response contians the Username Password n role
      {
        if(this.loginService.currentUserRole=="Admin"){   
          this.router.navigate(["/admin","dashboard"]);
        }else{
          this.router.navigate(["/employee","tasks"]);
        }
        
      },
      (error) =>
      {
        console.log(error);
        this.loginError = "Invalid Username or Password";
      },
    );
  }

}