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
  
    urlPrefix: string = "http://localhost:3000"; //make this as empty ("") if you are using asp.net core [without CORS]
   
    constructor(private httpClient: HttpClient)
    {
    }
   
    getAllProject(): Observable<Project[]>
    {
      return this.httpClient.get<Project[]>(this.urlPrefix + "/projects");
    }

    insertProject(newProject: Project): Observable<Project>
    {
      return this.httpClient.post<Project>(this.urlPrefix + "/projects", newProject);
    }
    

    updateProject(editProject: Project): Observable<Project>
    {
      return this.httpClient.put<Project>(this.urlPrefix + "/projects/"+editProject.projectID, editProject);
    }

    deleteProject(ProjectID: number): Observable<string>
  {
    return this.httpClient.delete<string>(this.urlPrefix + "/projects/" + ProjectID);
  }
  
}

