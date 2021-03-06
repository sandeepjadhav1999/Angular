import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginViewModel } from '../models/login-view-model';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { SignUpViewModel } from '../models/sign-up-view-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService
{
  private httpClient: HttpClient | null = null;
  urlPrefix: string = "http://localhost:9090"; 

  constructor(private httpBackend: HttpBackend, private jwtHelperService: JwtHelperService)
  {
  }

  currentUserName: any = null;
  currentUserRole:any=null

  public detectLoggedin(){
    if(this.jwtHelperService.isTokenExpired()==false){
      var currentUser= JSON.parse(sessionStorage['currentUser'])
      this.currentUserName=currentUser.currentUserName
      this.currentUserRole=currentUser.currentUserRole
    }
  }

  public Login(loginViewModel: LoginViewModel): Observable<any>
  {
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.post<any>(this.urlPrefix + "/authenticate", loginViewModel, { responseType: "json" ,observe:"response"})
      .pipe(map(response =>
      {
        if (response)
        {
          this.currentUserName = response.body.userName;
          this.currentUserRole=response.body.role
          sessionStorage['currentUser'] = JSON.stringify(response.body);
          sessionStorage['XSRFRequestToken'] = response.headers.get("XSRF-REQUEST-TOKEN");
        }
        return response.body;
      }));
  }

  public Register(signUpViewModel: SignUpViewModel): Observable<any>
  {
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.post<any>(this.urlPrefix + "/register", signUpViewModel, { responseType: "json", observe: "response" })
      .pipe(map(response =>
      {
        if (response)
        {
          this.currentUserName = response.body.userName;
          sessionStorage['currentUser'] = JSON.stringify(response.body);
          sessionStorage['XSRFRequestToken'] = response.headers.get("XSRF-REQUEST-TOKEN");
        }
        return response.body;
      }));
  }

  getUserByEmail(Email: string): Observable<any>
  {
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.get<any>(this.urlPrefix + "/api/getUserByEmail/" + Email, { responseType: "json" });
  }

  public Logout()
  {
    sessionStorage.removeItem("currentUser");
    this.currentUserName = null;
  }

  public getAllEmployee():Observable<any>{
    this.httpClient=new HttpClient(this.httpBackend)
    return this.httpClient.get<any>(this.urlPrefix+"/api/getallemployees",{responseType:"json"})
  }

  public isAuthenticated(): boolean
  {
    var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser") as any).token : null;
    if (this.jwtHelperService.isTokenExpired())
    {
      return false; //token is not valid
    }
    else
    {
      return true; //token is valid
    }
  }
}
