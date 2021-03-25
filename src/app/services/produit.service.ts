import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  }
}
