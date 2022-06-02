import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  jobRole:string;
  UserName:string=""
  TeamMembers:number=0
  PendingTask:number=0
  UpcompingProject:number=0
  CurrentExpense:number=0
  FundsLeft:number=0
  Team:string[]
  Year:number[]=[]
  TeamSummary:any[]=[]
  TeamMember:any=[]
  ProjectCost:number
  todayDay:Date

  constructor(private dashboadservice:DashboardService){}

  ngOnInit(){
    this.jobRole="Manager"
    this.UserName="Basu",
    this.TeamMembers=4,
    this.PendingTask=4,
    this.UpcompingProject=0,
    this.CurrentExpense=0,
    this.FundsLeft=0
    this.ProjectCost=0
    this.Team=['BitByBit','SRS','Tech Phantom'];
    // this.Year=[2022,2021]
    this.todayDay=new Date()


    for(var i=2022; i>=2021;i--)
    {
      this.Year.push(i)
    }
    this.TeamSummary=this.dashboadservice.getTeamDatils()
    
    this.TeamMember=this.dashboadservice.getTeamMember()
  }

  ChangeProject($event: any)
  {
    if ($event.target.innerHTML== 'BitByBit')
    {
      this.ProjectCost = 200;
      this.CurrentExpense = 150;
      this.FundsLeft = 50;
    } else if ($event.target.innerHTML == 'SRS')
    {
      this.ProjectCost = 220;
      this.CurrentExpense = 180;
      this.FundsLeft = 40;
    } else if ($event.target.innerHTML == 'Tech Phantom')
    {
      this.ProjectCost = 300;
      this.CurrentExpense = 150;
      this.FundsLeft = 150;
    } 
  }

}