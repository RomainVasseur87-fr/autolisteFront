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
  }
}