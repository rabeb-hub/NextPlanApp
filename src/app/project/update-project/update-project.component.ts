import {Component, OnInit} from '@angular/core';
import {Project} from "../../shared/models/Project";
import {Team} from "../../shared/models/team";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../shared/service/projet.service";
import {TeamService} from "../../shared/service/team.service";

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})

export class UpdateProjectComponent implements OnInit {
  projectId: any;
  project: Project = {
    id: 0,
    name: '',
    description: '',
    teamId: 0,
    tasks: []
  };
  teams: Team[] = [];

  constructor(
    private route: ActivatedRoute,
    private dataService: ProjectService,
    private router: Router,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
    this.fetchProjectDetails();
    this.fetchTeams();
  }

  fetchTeams() {
    this.teamService.getTeams().subscribe(
      (teams: Team[]) => (this.teams = teams),
      (error) => this.handleError('Error fetching teams', error)
    );
  }

  fetchProjectDetails() {
    this.dataService.getProjectById(this.projectId).subscribe(
      (project: Project) => (this.project = project),
      (error) => this.handleError('Error fetching project details', error)
    );
  }

  updateProjectDetails() {
    this.dataService.updateProject(this.project).subscribe(
      (updatedProject: Project) => {
        console.log('Project updated:', updatedProject);
        this.fetchProjectDetails();
        this.router.navigate(['/projects']);
      },
      (error) => this.handleError('Error updating project', error)
    );
  }

  private handleError(message: string, error: any) {
    console.error(message, error);
  }
}
