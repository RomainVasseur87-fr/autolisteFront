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
  };
  getUtilisateursByNom(nom:string) : Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.route}/nom/${nom}`)
  };
  getUtilisateursByPrenom(prenom:string) : Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.route}/prenom/${prenom}`)
  };
  getUtilisateursByAdresse(id:number) : Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.route}/adresse/${id}`)
  };
  getUtilisateursByRecette(id:number) : Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.route}/recette/${id}`)
  };

}