import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';
import { GroupedTask } from '../models/grouped-task';

@Injectable({
  providedIn: 'root'
})
export class TasksService
{
  urlPrefix: string = "http://localhost:9090";
  constructor(private httpClient: HttpClient)
  {
  }

  getTask(): Observable<GroupedTask[]>{
    return this.httpClient.get<GroupedTask[]>(this.urlPrefix+"/api/tasks",{ responseType: "json" })
    
  }

  insertTask(newTask: Task): Observable<Task>
  {
    return this.httpClient.post<Task>(this.urlPrefix +"/api/createtask", newTask, { responseType: "json" });
  }
}

