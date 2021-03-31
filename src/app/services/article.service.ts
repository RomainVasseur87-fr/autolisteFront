import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articlesSubject = new Subject<Article[]>();

  articlesObservable$ = this. articlesSubject.asObservable();

  readonly route: string = environment.apiUrl + "article";

  constructor(private http: HttpClient) { }

  getArticles() : void {
    this.http.get<Article[]>(this.route, {observe:'body'})
    .subscribe((articles:Article[])=>{
      this.articlesSubject.next(articles);
    })
  };
  getArticle(id:number) : Observable<Article> {
    return this.http.get<Article>(`${this.route}/${id}`)
  };
  getArticlesByNom(nom: string) : Observable<Article[]> {
    return this.http.get<Article[]>(`${this.route}/nom/${nom}`)
  };
  getArticlesByMagasin(id: number) : Observable<Article[]> {
    return this.http.get<Article[]>(`${this.route}/magasin/${id}`)
  };
  getArticlesByPrix(id: number) : Observable<Article[]> {
    return this.http.get<Article[]>(`${this.route}/prix/${id}`)
  };
  getArticlesByPrixInf(id: number) : Observable<Article[]> {
    return this.http.get<Article[]>(`${this.route}/prixInf/${id}`)
  };
  getArticlesByPrixSup(id: number) : Observable<Article[]> {
    return this.http.get<Article[]>(`${this.route}/prixSup/${id}`)
  };
  saveArticle(article:Article): Observable<Article> {
    return this.http.post<Article>(`${this.route}`,article)
  };

  updateArticle(id: number, article:Article): Observable<Article> {
    return this.http.put<Article>(`${this.route}/${id}`,article)
  };

  deleteArticle(id:number):Observable<Article> {
    return this.http.delete<Article>(`${this.route}/${id}`)
  };


}
