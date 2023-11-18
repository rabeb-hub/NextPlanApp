import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Member, Team} from "../../shared/models/team";
import {TeamService} from "../../shared/service/team.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-member-to-team',
  templateUrl: './add-member-to-team.component.html',
  styleUrls: ['./add-member-to-team.component.css']
})
export class AddMemberToTeamComponent {
    @Input()teamId: number;
    @Output() memberAdded: EventEmitter<any> = new EventEmitter<any>();

    newMember!: Member ;

  constructor(private route: ActivatedRoute, private teamService: TeamService) {
    this.teamId = this.route.snapshot.params['id'];
    this.newMember = new Member();
  }


    addMemberToTeam(): void {
        this.teamService.getTeamById(this.teamId)
            .subscribe((team: Team) => {
                team.members.push(this.newMember);
                this.teamService.updateTeamWithNewMember(this.teamId, team)
                    .subscribe(() => {
                        this.memberAdded.emit();
                        console.log('Membre ajouté à l\'équipe avec succès');
                    });
            });
    }
}
