import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Process } from '../models/process';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  readonly route: string = environment.apiUrl + "process";

  constructor(private http: HttpClient) { }

  getProcesses() : Observable<Process[]> {
    return this.http.get<Process[]>(this.route, {observe:'body'})
  };
  getProcess(id:number) : Observable<Process> {
    return this.http.get<Process>(`${this.route}/${id}`)
  };
  getProcessesByNom(nom:string) : Observable<Process[]> {
    return this.http.get<Process[]>(`${this.route}/nom/${nom}`)
  };
  getProcessesByDescription(nom:string) : Observable<Process[]> {
    return this.http.get<Process[]>(`${this.route}/description/${nom}`)
  };
  saveProcess(process:Process): Observable<Process> {
    return this.http.post<Process>(`${this.route}`,process)
  };

  updateProcess(id: number,process:Process): Observable<Process> {
    return this.http.put<Process>(`${this.route}/${id}`,process)
  };

  deleteProcess(id:number):Observable<Process> {
    return this.http.delete<Process>(`${this.route}/${id}`)
  };
}
