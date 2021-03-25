import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  readonly route: string = environment.apiUrl + "Commande";

  constructor(private http: HttpClient) { }

  getCommandes() : Observable<Commande[]> {
    return this.http.get<Commande[]>(this.route, {observe:'body'})
  };
  getCommande(id:number) : Observable<Commande> {
    return this.http.get<Commande>(`${this.route}/${id}`)
  };
  getCommandesByNom(nom: string) : Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.route}/nom/${nom}`)
  };
  getCommandesByArticle(id: number) : Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.route}/article/${id}`)
  };
  saveCommande(commande:Commande): Observable<Commande> {
    return this.http.post<Commande>(`${this.route}`,commande)
  };

  updateCommande(id: number,commande:Commande): Observable<Commande> {
    return this.http.put<Commande>(`${this.route}/${id}`,commande)
  };

  deleteCommande(id:number):Observable<Commande> {
    return this.http.delete<Commande>(`${this.route}/${id}`)
  };
}