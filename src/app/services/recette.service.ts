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
  };
  getRecettesByNom(nom:string) : Observable<Recette[]> {
    return this.http.get<Recette[]>(`${this.route}/nom/${nom}`)
  };
  getRecettesByIngredient(id:number) : Observable<Recette[]> {
    return this.http.get<Recette[]>(`${this.route}/ingredient/${id}`)
  };
  getRecettesByNbConvives(id:number) : Observable<Recette[]> {
    return this.http.get<Recette[]>(`${this.route}/nbconvives/${id}`)
  };
  getRecettesByNbConvivesGreaterThan(id:number) : Observable<Recette[]> {
    return this.http.get<Recette[]>(`${this.route}/nb-convives-greater-than/${id}`)
  };
  getRecettesByNbConvivesSmallerThan(id:number) : Observable<Recette[]> {
    return this.http.get<Recette[]>(`${this.route}/nb-convives-smaller-than/${id}`)
  };
  getRecettesByProcess(id:number) : Observable<Recette[]> {
    return this.http.get<Recette[]>(`${this.route}/pocess/${id}`)
  };
  getRecettesByyheme(id:number) : Observable<Recette[]> {
    return this.http.get<Recette[]>(`${this.route}/theme/${id}`)
  };
  saveRecette(recette:Recette): Observable<Recette> {
    return this.http.post<Recette>(`${this.route}`,recette)
  };

  updateRecette(id: number,recette:Recette): Observable<Recette> {
    return this.http.put<Recette>(`${this.route}/${id}`,recette)
  };

  deleteRecette(id:number):Observable<Recette> {
    return this.http.delete<Recette>(`${this.route}/${id}`)
  };
}
