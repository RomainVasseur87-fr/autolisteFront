import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Panier } from '../models/panier';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  readonly route: string = environment.apiUrl + "panier";

  constructor(private http: HttpClient) { }

  getPaniers() : Observable<Panier[]> {
    return this.http.get<Panier[]>(this.route, {observe:'body'})
  };
  getPanier(id:number) : Observable<Panier> {
    return this.http.get<Panier>(`${this.route}/${id}`)
  };
  getPaniersByNom(nom:string) : Observable<Panier[]> {
    return this.http.get<Panier[]>(`${this.route}/nom/${nom}`)
  };
  getPaniersByProduit(id:number) : Observable<Panier[]> {
    return this.http.get<Panier[]>(`${this.route}/produit/${id}`)
  };
  savePanier(panier:Panier): Observable<Panier> {
    return this.http.post<Panier>(`${this.route}`,panier)
  };

  updatePanier(id: number,panier:Panier): Observable<Panier> {
    return this.http.put<Panier>(`${this.route}/${id}`,panier)
  };

  deletePanier(id:number): Observable<HttpResponse<Panier>> {
    console.warn('Suppression de ' + id);
    return this.http.delete<Panier>(`${this.route}/${id}`, {observe: 'response'})
  };
}
