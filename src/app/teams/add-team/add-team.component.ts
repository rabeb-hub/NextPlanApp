import { Component } from '@angular/core';
import {TeamService} from "../../shared/service/team.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent {
  newTeam: any = {
    id: null,
    name: '',
    members: []
  };

  constructor(private teamService: TeamService ,private router : Router) { }

  addTeam(teamForm: NgForm): void {
    if (teamForm.valid) {
      this.teamService.addTeam(this.newTeam)
        .subscribe(response => {
          // Handle the response or any further actions upon successful addition
          console.log('New team added:', response);
          this.router.navigate(['/teams']);
          // You might navigate somewhere or reset the form after adding the team
        }, error => {
          // Handle errors if the addition fails
          console.error('Error adding team:', error);
        });
    }
  }
}
