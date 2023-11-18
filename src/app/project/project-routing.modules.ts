import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectDetailsComponent} from "./project-details/project-details.component";
import {ProjectsListComponent} from "./projects-list/projects-list.component";
import {AddProjectComponent} from "./add-project/add-project.component";
import {UpdateProjectComponent} from "./update-project/update-project.component";

const projectRoutes: Routes = [
  { path: 'projects', component: ProjectsListComponent },
  { path: 'add-project', component: AddProjectComponent },
  { path: 'update-project/:id', component: UpdateProjectComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(projectRoutes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
