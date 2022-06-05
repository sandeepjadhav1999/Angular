import { Component, OnInit } from '@angular/core';
import { GroupedTask } from 'src/app/models/grouped-task';
import { Task } from 'src/app/models/task';
import { LoginService } from 'src/app/service/login.service';
import { TasksService } from 'src/app/service/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  taskgrouped:GroupedTask[]=[]
  

  constructor(private taskService:TasksService, private loginService:LoginService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((response)=>{
      this.taskgrouped=response
    })
  }

}
