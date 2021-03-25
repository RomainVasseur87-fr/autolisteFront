import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  readonly route: string = environment.apiUrl + "utilisateur";

  constructor(private http: HttpClient) { }

  getUtilisateurs() : Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.route, {observe:'body'})
  };
  getUtilisateur(id:number) : Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.route}/${id}`)
  }
}