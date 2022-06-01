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
  newProject:Project=new Project()
  updateProject:Project=new Project()
  deleteProject:Project=new Project()
  editIndex:any=null
  deleteIndex:any=null
  constructor(private projectService:ProjectService) { }

  ngOnInit() {
    this.projectService.getAllProject().subscribe(
      (response:Project[])=>{
        this.projects=response
      }
    )
  }

  save(){
    this.projectService.insertProject(this.newProject).subscribe(
      (response)=>{
        var p:Project=new Project()
        p.projectID=response.projectID
        p.projectName=response.projectName
        p.dateOfStart=response.dateOfStart
        p.teamSize=response.teamSize
        this.projects.push(p)


        this.newProject.projectID=null
        this.newProject.projectName=null
        this.newProject.dateOfStart=null
        this.newProject.teamSize=null
      },
      (error)=>{console.log(error)}
    )
  }

  edit(event:any,index:number){
    this.updateProject.projectID=this.projects[index].projectID
    this.updateProject.projectName=this.projects[index].projectName
    this.updateProject.dateOfStart=this.projects[index].dateOfStart
    this.updateProject.teamSize=this.projects[index].teamSize
    this.editIndex=index
  }

  update(){
    this.projectService.updateProject(this.updateProject).subscribe(
      (response:Project)=>{
        var p:Project=new Project()
        p.projectID=response.projectID
        p.projectName=response.projectName
        p.dateOfStart=response.dateOfStart
        p.teamSize=response.teamSize
        this.projects[this.editIndex]=p

        this.updateProject.projectID=null
        this.updateProject.projectName=null
        this.updateProject.dateOfStart=null
        this.updateProject.teamSize=null
      },
      (error)=>{console.log(error)}
    )
  }

  delete(event:any,index:number){
    this.deleteProject.projectID=this.projects[index].projectID
    this.deleteProject.projectName=this.projects[index].projectName
    this.deleteProject.dateOfStart=this.projects[index].dateOfStart
    this.deleteProject.teamSize=this.projects[index].teamSize
    this.deleteIndex=index
  }

  deleteConfirm(){
    this.projectService.deleteProject(this.deleteProject.projectID).subscribe(
      (response)=>{
        this.projects.splice(this.deleteIndex,1)
        this.deleteProject.projectID=null
        this.deleteProject.projectName=null
        this.deleteProject.dateOfStart=null
        this.deleteProject.teamSize=null
      },
      (error)=>{console.log(error)}
    )
  }

}
