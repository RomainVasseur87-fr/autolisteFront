import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recette } from '../models/recette';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  readonly route: string = environment.apiUrl + "recette";

  private recettesSubject = new Subject<Recette[]>();

  // convention de nommage des Observables (affixé par un $)
  recettesObservable$ = this.recettesSubject.asObservable();

  constructor(private http: HttpClient) { }

  getRecettes() : void {
    this.http.get<Recette[]>(this.route, {observe:'body'})
      .subscribe((recettes: Recette[])=>{
        this.recettesSubject.next(recettes);
      })
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
    return this.http.get<Recette[]>(`${this.route}/process/${id}`)
  };
  getRecettesByTheme(id:number) : Observable<Recette[]> {
    return this.http.get<Recette[]>(`${this.route}/theme/${id}`)
  };
  saveRecette(recette:Recette): Observable<HttpResponse<Recette>> {
    return this.http.post<Recette>(`${this.route}`,recette, {observe: 'response'})
  };

  updateRecette(id: number,recette:Recette): Observable<HttpResponse<Recette>> {
    return this.http.put<Recette>(`${this.route}/${id}`,recette, {observe:'response'})
  };

  deleteRecette(id:number):Observable<HttpResponse<Recette>> {
    console.warn('Suppression de ' + id);
    return this.http.delete<Recette>(`${this.route}/${id}`, {observe: 'response'})
  };
}
