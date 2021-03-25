import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  readonly route: string = environment.apiUrl + "article";

  constructor(private http: HttpClient) { }

  getArticles() : Observable<Article[]> {
    return this.http.get<Article[]>(this.route, {observe:'body'})
  };
  getArticle(id:number) : Observable<Article> {
    return this.http.get<Article>(`${this.route}/${id}`)
  }
}
