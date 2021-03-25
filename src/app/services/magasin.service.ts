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

  getPaniers() : Observable<Magasin[]> {
    return this.http.get<Magasin[]>(this.route, {observe:'body'})
  };
  getPanier(id:number) : Observable<Magasin> {
    return this.http.get<Magasin>(`${this.route}/${id}`)
  }
}
