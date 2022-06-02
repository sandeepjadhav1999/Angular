import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loginviewmodel } from './loginviewmodel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService
{
  constructor(private httpClient: HttpClient)
  {
  }

  currentUserName: any = null;

  public Login(loginViewModel: Loginviewmodel): Observable<any>
  {
    return this.httpClient.post<any>( "http://localhost:3000/users", loginViewModel)
      .pipe(map(user =>
      {
        if (user)
        {
          this.currentUserName = user.userName;
        }
        return user;
      }));
  }

  public Logout()
  {
    this.currentUserName = null;
  }
}