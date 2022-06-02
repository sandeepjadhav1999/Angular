import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Loginviewmodel } from '../loginviewmodel';
import { FormGroup,FormBuilder } from '@angular/forms'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup

  currentsuser:any=null
  loginviewmodel:Loginviewmodel=new Loginviewmodel()
  loginError:string=""

  constructor(private loginService:LoginService,
    private router:Router,
    private formbuilder:FormBuilder,
    private http:HttpClient
    ) { }

  ngOnInit(): void {
    this.loginForm=this.formbuilder.group(
      {
        userName:[''],
        Password:['']
    }
    )
  }

  

  login(){
    this.http.get<any>(" http://localhost:3000/users")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.userName === this.loginForm.value.userName && a.Password === this.loginForm.value.Password
      });
      if(user){
        // alert("Login Success")
        this.loginForm.reset()
        this.router.navigateByUrl("/dashboard")
      }else{
        alert("soemthing went Wrong")
      }  
    },er=>{
      alert("something went Wrongr")
    }
    )

  }

}
