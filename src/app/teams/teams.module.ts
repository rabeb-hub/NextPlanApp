import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeamRoutingModule} from "./team-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {ProjectService} from "../shared/service/projet.service";
import {TeamService} from "../shared/service/team.service";
import {TeamListComponent} from "./team-list/team-list.component";
import {AddMemberToTeamComponent} from "./add-member-to-team/add-member-to-team.component";
import { AddTeamComponent } from './add-team/add-team.component';



@NgModule({
  declarations: [
    TeamListComponent, AddMemberToTeamComponent, AddTeamComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),ReactiveFormsModule, FormsModule, HttpClientModule
  ],
  providers: [TeamService],
})
export class TeamsModule { }
