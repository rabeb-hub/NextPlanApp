import { AppComponent } from './app.component';
import {NgModule} from "@angular/core";
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {SidebarComponent} from "./shared/sidebar/sidebar.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProjectModule} from "./project/project.module";
import {TeamsModule} from "./teams/teams.module";


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ProjectModule,
    TeamsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
