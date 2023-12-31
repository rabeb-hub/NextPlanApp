import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectModule} from "./project/project.module";
import {TeamsModule} from "./teams/teams.module";


const routes: Routes = [
  { path: 'teams', loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule) },
  { path: 'projects', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: '**', redirectTo: '/psroject' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProjectModule , TeamsModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
