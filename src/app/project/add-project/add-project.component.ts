import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../shared/service/projet.service";
import {Project,Task} from "../../shared/models/Project";
import {Team} from "../../shared/models/team";
import {Router} from "@angular/router";
import {TeamService} from "../../shared/service/team.service";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})

export class AddProjectComponent implements OnInit {
  teams: Team[] = [];
  project: Project = {
    id: 0,
    name: '',
    description: '',
    teamId: 0,
    tasks: []
  };

  constructor(private dataService: ProjectService, private router: Router, private teamService: TeamService) {}

  addTask() {
    const newTask: Task = {
      id: 0,
      title: '',
      description: '',
      status: 'To do',
      dueDate: ''
    };
    this.project.tasks.push(newTask);
  }

  addProject() {
    this.dataService.addProject(this.project).subscribe((createdProject: Project) => {
      this.project.tasks.forEach((task: Task) => {
        this.dataService.addTask(task).subscribe((createdTask: Task) => {
          console.log('Task added:', createdTask);
        });
      });
      console.log('Project added:', createdProject);
    });
    this.router.navigate(['/projects']);
  }

  ngOnInit(): void {
    this.fetchTeams();
  }

  fetchTeams() {
    this.teamService.getTeams().subscribe((teams: Team[]) => {
      this.teams = teams;
    });
  }

  isProjectValid(): boolean {
    const incompleteTasks = this.project.tasks.some(task => !task.title || !task.dueDate);
    return !this.project.teamId || !this.project.name ||  this.project.tasks.length === 0 || incompleteTasks;
  }

}


