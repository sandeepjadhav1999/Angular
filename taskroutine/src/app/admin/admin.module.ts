import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { DashboardService } from '../service/dashboard.service';
import { ProjectIDUniqueValidatorDirective } from '../directives/project-idunique-validator.directive';
import { ProjectComponent } from './components/project/project.component';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './components/projects/projects.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';


@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyprofileComponent,
    ProjectsComponent,
    ProjectIDUniqueValidatorDirective ,
    ProjectComponent
 
  ],
  imports: [
    CommonModule, FormsModule,AdminRoutingModule
  ],
  exports:[
    DashboardComponent,
    AboutComponent,
    MyprofileComponent,
    ProjectsComponent,
    ProjectIDUniqueValidatorDirective,
    ProjectComponent

  ],
  providers:[DashboardService]

})
export class AdminModule { }
