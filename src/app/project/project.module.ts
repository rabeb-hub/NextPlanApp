import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {ProjectRoutingModule} from "./project-routing.modules";
import {ProjectService} from "../shared/service/projet.service";
import {AddProjectComponent} from "./add-project/add-project.component";
import {ProjectsListComponent} from "./projects-list/projects-list.component";
import {UpdateProjectComponent} from "./update-project/update-project.component";
import {ProjectDetailsComponent} from "./project-details/project-details.component";
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AddProjectComponent, ProjectsListComponent , UpdateProjectComponent, ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ProjectRoutingModule,
    ReactiveFormsModule, FormsModule, HttpClientModule,NgChartsModule
  ],
  providers: [ProjectService],
})
export class ProjectModule { }
