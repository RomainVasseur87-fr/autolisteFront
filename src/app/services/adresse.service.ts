import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Adresse } from '../models/adresse';

@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  readonly route: string = environment.apiUrl + "adresse";

  constructor(private http: HttpClient) { }

  getAdresses() : Observable<Adresse[]> {
    return this.http.get<Adresse[]>(this.route, {observe:'body'})
  };
  getAdresse(id:number) : Observable<Adresse> {
    return this.http.get<Adresse>(`${this.route}/${id}`)
  }

  getAdressesByVille(ville:string) : Observable<Adresse> {
    return this.http.get<Adresse>(`${this.route}/ville/${ville}`)
  }

  getAdressesByCodePostal(codePostal:string) : Observable<Adresse> {
    return this.http.get<Adresse>(`${this.route}/codepostal/${codePostal}`)
  }
  getAdresseByUtilisateur(id:number) : Observable<Adresse> {
    return this.http.get<Adresse>(`${this.route}/utilisateur/${id}`)
  }
  saveAdresse(adresse: Adresse): Observable<Adresse> {
    return this.http.post<Adresse>(`${this.route}`,adresse)
  };

  updateAdresse(id: number, adresse: Adresse): Observable<Adresse> {
    return this.http.put<Adresse>(`${this.route}/${id}`, adresse)
  };

  deleteAdresse(id:number):Observable<Adresse> {
    return this.http.delete<Adresse>(`${this.route}/${id}`)
  };
}
