import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project';
import { TasksService } from 'src/app/service/tasks.service';
import { ProjectsService } from 'src/app/service/projects.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { LoginViewModel } from 'src/app/models/login-view-model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit
{
  newTaskForm: FormGroup|any;
  projects: Observable<Project[]>;
  employees: Observable<any>;
  assign:Observable<LoginViewModel[]>
  
  constructor(private tasksService: TasksService, private router: Router, private projectsService: ProjectsService,  public loginService: LoginService)
  {
  }

  ngOnInit()
  {
    this.newTaskForm = new FormGroup({
      taskID: new FormControl(0),
      taskName: new FormControl(null, [ Validators.required ]),
      description: new FormControl(null, []),
      projectID: new FormControl(null, [ Validators.required ]),
      assignedTo: new FormControl(null, [ Validators.required ]),
      createdBy:new FormControl(null, [ Validators.required ]),

    });

    this.projects = this.projectsService.getAllProjects();
    this.employees = this.loginService.getAllEmployee()
  }

  onCreateTaskClick(event:any)
  {
    this.newTaskForm["submitted"] = true;

    if (this.newTaskForm.valid)
    {
      this.tasksService.insertTask(this.newTaskForm.value).subscribe(() => {
        this.router.navigate( [ "/employee", "tasks" ]);
      }, (error) => {
        console.log(error);
      });
    }
    else
    {
      console.log(this.newTaskForm.errors);
    }
  }
}
