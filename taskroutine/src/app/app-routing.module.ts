import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './admin/about/about.component';
import { ProjectComponent } from './admin/project/project.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"about",component:AboutComponent},
  {path:"project",component:ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
