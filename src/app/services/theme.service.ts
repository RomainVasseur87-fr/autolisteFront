import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Theme } from '../models/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  readonly route: string = environment.apiUrl + "theme";

  constructor(private http: HttpClient) { }

  getThemes() : Observable<Theme[]> {
    return this.http.get<Theme[]>(this.route, {observe:'body'})
  };
  getTheme(id:number) : Observable<Theme> {
    return this.http.get<Theme>(`${this.route}/${id}`)
  }
}
