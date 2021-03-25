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
}
