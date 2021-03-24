import { HttpClient } from '@angular/common/http';
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
  }
}
