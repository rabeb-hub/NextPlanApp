import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project, Task} from "../models/Project";
import {Team} from "../models/team";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}


// get
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/projects`);
  }


  getProjectById(projectId: number): Observable<Project> {
    const url = `${this.apiUrl}/projects/${projectId}`;
    return this.http.get<Project>(url);
  }

//add
  addProject(newProject: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/projects`, newProject);
  }

  addTask(task: Task): Observable<any>  {
    return this.http.post<any>(`${this.apiUrl}/tasks`, task);
  }

  // update
  updateProject(project: Project): Observable<Project> {
    const url = `${this.apiUrl}/projects/${project.id}`;
    return this.http.put<Project>(url, project);
  }


  // delete
  deleteProject(projectId: number): Observable<void> {
    const url = `${this.apiUrl}/projects/${projectId}`;
    return this.http.delete<void>(url);
  }

}
