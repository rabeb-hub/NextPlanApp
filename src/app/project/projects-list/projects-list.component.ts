import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../shared/service/projet.service";
import {Project, Task} from "../../shared/models/Project";
import {Team} from "../../shared/models/team";
import {Router} from "@angular/router";
import {TeamService} from "../../shared/service/team.service";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  searchProject: string = '';
  teams: Team[] = [];
  constructor(private projectService: ProjectService , private router: Router, private teamService: TeamService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.filteredProjects = projects;
    });

    this.teamService.getTeams().subscribe(teams => {
      this.teams = teams;
    });
  }

  getProjectStatus(projectId: number): string {
    const project = this.projects.find(project => project.id === projectId);

    if (!project || !project.tasks || project.tasks.length === 0) {
      return 'No tasks';
    }

    const tasksInProgress = project.tasks.some(task => task.status === 'In Progress');
    const tasksDone = project.tasks.every(task => task.status === 'Done');

    if (tasksInProgress) {
      return 'In Progress';
    } else if (tasksDone) {
      return 'Done';
    } else {
      return 'To Do';
    }
  }

  filterProjects(): void {
    this.filteredProjects = this.projects.filter(project =>
      project.name.toLowerCase().includes(this.searchProject.toLowerCase())
    );
  }

  navigateToProjectDetails(projectId: number): void {
    this.router.navigate(['/projects', projectId]);
  }
  getLatestTaskDate(tasks: any[]): string {
    if (tasks.length === 0) return 'No task';

    let latestDate = tasks[0].dueDate;

    for (let i = 1; i < tasks.length; i++) {
      const taskDate = tasks[i].dueDate;
      if (new Date(taskDate) > new Date(latestDate)) {
        latestDate = taskDate;
      }
    }
    return latestDate;
  }

  deleteProject(projectId: number) {
    this.projectService.deleteProject(projectId).subscribe(() => {
      this.fetchProjects();
    }, (error) => {
      console.error('Une erreur s\'est produite lors de la suppression du projet:', error);
    });
  }
  fetchProjects() {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.filteredProjects = projects;
    });
  }
  goToUpdateProject(project: Project): void {
    this.router.navigate(['/update-project', project.id]);
  }
  goToAddProject(): void {
    this.router.navigate(['/add-project']);
  }

}
