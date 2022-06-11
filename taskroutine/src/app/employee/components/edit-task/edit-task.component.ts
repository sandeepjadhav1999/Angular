import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TasksService } from 'src/app/service/tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  taskName:any
  currentTask:Task=new Task()
  newTaskForm: FormGroup|any;
 



  constructor(private taskService:TasksService, private router:Router, private activeRoute:ActivatedRoute) { }

  projectID=this.currentTask.projectID
  ngOnInit() {
    this.activeRoute.params.subscribe((params)=>{
      this.taskName=params['taskName']
      console.log(this.taskName)
    })

    this.taskService.getTaskbyTaskName(this.taskName).subscribe(
      (response)=>{
        this.currentTask=response
      }
    )
    
    this.newTaskForm = new FormGroup({
      taskID: new FormControl(0),
      taskName: new FormControl(null, [ Validators.required ]),
      description: new FormControl(null, []),
      projectID: new FormControl(null, [ Validators.required ]),
      assignedTo: new FormControl(null, [ Validators.required ]),
      createdBy:new FormControl(null, [ Validators.required ]),
      lastUpdatedOn:new FormControl([])

    });

  }

  onUpdateTaskClick(event:any)
  {
    this.newTaskForm["submitted"] = true;

    if (this.newTaskForm.valid)
    {
      this.taskService.updateTask(this.newTaskForm.value).subscribe(() => {
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
  
  


