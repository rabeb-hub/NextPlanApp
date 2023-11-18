import { Component, OnInit } from '@angular/core';

import { TeamService } from '../../shared/service/team.service';
import {Team} from "../../shared/models/team";


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent  implements OnInit{
    teams: Team[] = [];
    selectedTeamId: number | null = null;
    teamToUpdate!: Team;
    constructor(private teamService: TeamService) {}

    ngOnInit(): void {
      this.fetchTeams();
    }

    fetchTeams(): void {
        this.teamService.getTeams().subscribe((teams: Team[]) => {
            this.teams = teams;
        });
    }
    refreshTeamsList(): void {
        this.fetchTeams();
    }

    showAddMemberForm(teamId: number): void {
        this.selectedTeamId = teamId;
    }

  deleteTeam(teamId: number): void {
    this.teamService.deleteTeam(teamId).subscribe(
      (result) => {
        console.log('team supprimé de l\'équipe');
        this.fetchTeams(); // Rafraîchir la liste des équipes après la suppression
      },
      (error) => {
        console.error('Erreur lors de la suppression du membre :', error);
      }
    );
  }

  deleteMemberFromTeam(teamId: number, memberId: number): void {
    const teamToUpdate = this.teams.find(team => team.id === teamId);

    if (teamToUpdate) {
      teamToUpdate.members = teamToUpdate.members.filter(member => member.id !== memberId);

      this.teamService.updateTeam(teamToUpdate)
        .subscribe(updatedTeam => {
          this.fetchTeams();
          console.log(`Le membre avec l'ID ${memberId} a été supprimé de l'équipe ${teamId}`);
        }, error => {
          console.error(`Erreur lors de la suppression du membre : ${error}`);
        });
    }
  }


}
