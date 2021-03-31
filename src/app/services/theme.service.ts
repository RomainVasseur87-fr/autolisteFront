import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Theme } from '../models/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  readonly route: string = environment.apiUrl + "theme";

  private themesSubject = new Subject<Theme[]>();

  themesObservable$ = this.themesSubject.asObservable();

  constructor(private http: HttpClient) { }

  getThemes() : void {
    this.http.get<Theme[]>(this.route, {observe:'body'})
    .subscribe((themes: Theme[])=>{
      this.themesSubject.next(themes);
    })
  };
  getTheme(id:number) : Observable<Theme> {
    return this.http.get<Theme>(`${this.route}/${id}`)
  };
  getThemesByNom(nom:string) : Observable<Theme[]> {
    return this.http.get<Theme[]>(`${this.route}/nom/${nom}`)
  };
  saveTheme(theme:Theme): Observable<Theme> {
    return this.http.post<Theme>(`${this.route}`,theme)
  };

  updateTheme(id: number,theme:Theme): Observable<Theme> {
    return this.http.put<Theme>(`${this.route}/${id}`,theme)
  };

  deleteTheme(id:number):Observable<Theme> {
    return this.http.delete<Theme>(`${this.route}/${id}`)
  };
}
