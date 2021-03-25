import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { runInThisContext } from 'node:vm';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  readonly route: string = environment.apiUrl + "produit";

  constructor(private http: HttpClient) { }

  getProduits() : Observable<Produit[]> {
    return this.http.get<Produit[]>(this.route, {observe:'body'})
  };
  getProduit(id:number) : Observable<Produit> {
    return this.http.get<Produit>(`${this.route}/${id}`)
  };

  getProduitsByNom(nom: string): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.route}/nom/${nom}`)
  };
  getProduitsByCategorie(id: number): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.route}/categorie/${id}`)
  };

  saveProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(`${this.route}`, produit)
  };

  updateProduit(id: number, produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(`${this.route}/${id}`,produit)
  };

  deleteProduit(id:number):Observable<Produit> {
    return this.http.delete<Produit>(`${this.route}/${id}`)
  };

}
