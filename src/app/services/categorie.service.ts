import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  readonly route: string = environment.apiUrl + "categorie";

  constructor(private http: HttpClient) { }

  getCategories() : Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.route, {observe:'body'})
  };
  getCategorie(id:number) : Observable<Categorie> {
    return this.http.get<Categorie>(`${this.route}/${id}`)
  };
  getCategoriesByNom(nom: string) : Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.route}/nom/${nom}`)
  };
  saveCategorie(categorie:Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(`${this.route}`,categorie)
  };

  updateCategorie(id: number,categorie:Categorie): Observable<Categorie> {
    return this.http.put<Categorie>(`${this.route}/${id}`, categorie)
  };

  deleteCategorie(id:number):Observable<Categorie> {
    return this.http.delete<Categorie>(`${this.route}/${id}`)
  };
}
