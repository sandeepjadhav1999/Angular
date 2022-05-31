import { Component, OnInit } from '@angular/core';

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

  ngOnInit(){
    this.jobRole="Manager"
    this.UserName="Basu",
    this.TeamMembers=4,
    this.PendingTask=4,
    this.UpcompingProject=0,
    this.CurrentExpense=120,
    this.FundsLeft=80
    this.ProjectCost=200
    this.Team=['BitByBit','SRS','Tech Phantom'];
    // this.Year=[2022,2021]
    for(var i=2022; i>=2021;i--)
    {
      this.Year.push(i)
    }
    this.TeamSummary=[
      {TeamName:'BitByBit',TeamCount:3,available:0},
      {TeamName:'SRS',TeamCount:3,available:0},
      {TeamName:'Tech Phantom',TeamCount:3,available:0}
    ]

    this.TeamMember=[
      {
        TeamName:'BitByBit',Member:[
          {Id:1,Name:'Chetan',Available:'Available'},
          {Id:2,Name:'Sandeep',Available:'Available'},
          {Id:3,Name:'Thnushree',Available:'Available'},
        ] 
      },
      {
        TeamName:'SRS',Member:[
          {Id:1,Name:'Shiledra Pal',Available:'Available'},
          {Id:2,Name:'Ravalika',Available:'Available'},
          {Id:3,Name:'Sadiq',Available:'Available'},
        ] 
      },
      {
        TeamName:'Tech Phantom',Member:[
          {Id:1,Name:'Ramya Yande',Available:'Available'},
          {Id:2,Name:'Neeraj Kumar',Available:'Available'},
          {Id:3,Name:'Seemarani G',Available:'Available'},
        ] 
      },
    ]
    
  }

}
