import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recette } from '../models/recette';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  readonly route: string = environment.apiUrl + "recette";

  constructor(private http: HttpClient) { }

  getRecettes() : Observable<Recette[]> {
    return this.http.get<Recette[]>(this.route, {observe:'body'})
  };
  getRecette(id:number) : Observable<Recette> {
    return this.http.get<Recette>(`${this.route}/${id}`)
  }
}
