import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  // constructor(private httpClient: HttpClient){

  // }
  // getAllProject():Observable<Project[]>
  // {
  //   return this.httpClient.get<Project[]>("api/projects")
  // }
  
    urlPrefix: string = "http://localhost:9090"; //make this as empty ("") if you are using asp.net core [without CORS]
   
    constructor(private httpClient: HttpClient)
    {
    }
   
    getAllProject(): Observable<Project[]>
    {
      return this.httpClient.get<Project[]>(this.urlPrefix + "/api/projects");
    }
  
}

