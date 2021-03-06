import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Magasin } from '../models/magasin';

@Injectable({
  providedIn: 'root'
})
export class MagasinService {

  readonly route: string = environment.apiUrl + "Magasin";

  constructor(private http: HttpClient) { }

  getMagasins() : Observable<Magasin[]> {
    return this.http.get<Magasin[]>(this.route, {observe:'body'})
  };
  getMagasin(id:number) : Observable<Magasin> {
    return this.http.get<Magasin>(`${this.route}/${id}`)
  };
  getMagasinsByNom(nom:string) : Observable<Magasin[]> {
    return this.http.get<Magasin[]>(`${this.route}/nom/${nom}`)
  };
  getMagasinsByPartieNom(nom:string) : Observable<Magasin[]> {
    return this.http.get<Magasin[]>(`${this.route}/partienom/${nom}`)
  };
  getMagasinsByAdresse(id:number) : Observable<Magasin[]> {
    return this.http.get<Magasin[]>(`${this.route}/adresse/${id}`)
  };
  getMagasinsByVille(ville:string) : Observable<Magasin[]> {
    return this.http.get<Magasin[]>(`${this.route}/ville/${ville}`)
  };
  saveMagasin(magasin:Magasin): Observable<Magasin> {
    return this.http.post<Magasin>(`${this.route}`,magasin)
  };

  updateMagasin(id: number,magasin:Magasin): Observable<Magasin> {
    return this.http.put<Magasin>(`${this.route}/${id}`,magasin)
  };

  deleteMagasin(id:number):Observable<Magasin> {
    return this.http.delete<Magasin>(`${this.route}/${id}`)
  };
}
