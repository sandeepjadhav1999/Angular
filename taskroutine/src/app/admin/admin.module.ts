import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { DashboardService } from '../dashboard.service';
import { ProjectComponent } from './project/project.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyprofileComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[
    DashboardComponent,
    AboutComponent,
    MyprofileComponent,
    ProjectComponent
  ],
  providers:[DashboardService]

})
export class AdminModule { }