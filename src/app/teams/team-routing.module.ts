import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddTeamComponent} from "./add-team/add-team.component";
import {TeamListComponent} from "./team-list/team-list.component";
import {AddMemberToTeamComponent} from "./add-member-to-team/add-member-to-team.component";

const teamRoutes: Routes = [
  { path: 'teams', component: TeamListComponent },
  { path: 'teams/:id/membres', component: AddMemberToTeamComponent },
  { path: 'AddTeams', component:AddTeamComponent}
];

@NgModule({
  imports: [RouterModule.forChild(teamRoutes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
