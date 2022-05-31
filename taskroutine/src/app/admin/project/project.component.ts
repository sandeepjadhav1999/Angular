import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects:Project[]

  constructor(private projectService:ProjectService) { }

  ngOnInit() {
    this.projectService.getAllProject().subscribe(
      (response:Project[])=>{
        this.projects=response
      }
    )
  }

}
