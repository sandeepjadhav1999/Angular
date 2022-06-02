import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './admin/about/about.component';
import { ProjectsComponent } from './admin/projects/projects.component';

// import { CanActivateGuardService } from './can-activate-guard.service';

const routes: Routes = [
  // {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"dashboard",component:DashboardComponent ,},
  {path:"about",component:AboutComponent},
  {path:"project",component:ProjectsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
