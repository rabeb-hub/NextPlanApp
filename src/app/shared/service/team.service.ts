import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Member, Team} from "../models/team";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private apiUrl = 'http://localhost:3000/teams';

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.apiUrl}`);
  }
  getTeamById(teamId: number): Observable<Team> {
    const url = `${this.apiUrl}/${teamId}`;
    return this.http.get<Team>(url);
  }
  updateTeamWithNewMember(teamId: number, updatedTeam: Team): Observable<Team> {
    const url = `${this.apiUrl}/${teamId}`;
    return this.http.put<Team>(url, updatedTeam);
  }

  deleteTeam(teamId: number): Observable<any> {
    const url = `${this.apiUrl}/${teamId}`;
    return this.http.delete(url);
  }

  updateTeam(updatedTeam: Team): Observable<Team> {
    const url = `${this.apiUrl}/${updatedTeam.id}`;
    return this.http.put<Team>(url, updatedTeam);
  }

  addTeam(newTeam: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, newTeam);
  }
}
