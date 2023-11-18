import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/models/Project';
import { ProjectService } from '../../shared/service/projet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements OnInit {
    projectId: number;
    projectDetails: Project;
    taskData: { data: number[]; label: string }[] = [];
    taskLabels: string[] = [];

    constructor(
        private route: ActivatedRoute,
        private projectService: ProjectService
    ) {
        this.projectId = 0;
        this.projectDetails = new Project();
        this.taskData = [];
        this.taskLabels = [];
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.projectId = params['id'];
            this.getProjectDetails();
        });
    }

    getProjectDetails(): void {
        this.projectService.getProjectById(this.projectId).subscribe(
            (data: Project) => {
                this.projectDetails = data;
                this.generateChart();
            },
            (error) => {
                console.error('Erreur lors de la récupération des détails du projet :', error);
            }
        );
    }

    generateChart(): void {
        if (this.projectDetails && this.projectDetails.tasks) {
            const statusCounts: { [key: string]: number } = {};
            this.projectDetails.tasks.forEach(task => {
                statusCounts[task.status] = (statusCounts[task.status] || 0) + 1;
            });

            this.taskLabels = Object.keys(statusCounts);
            this.taskData = this.taskLabels.map(label => ({
                data: [statusCounts[label]],
                label: label
            }));

            console.log('Labels:', this.taskLabels);
            console.log('Data:', this.taskData);
        }
    }



}

