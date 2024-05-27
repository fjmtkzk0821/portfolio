import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from 'src/app/model/article';
import { Tag } from 'src/app/model/tag';
import { Archive } from 'src/app/model/archive';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(
    private http: HttpClient,
  ) { }

  public get(lastDoc: string = ''): Observable<{
    articles: Article[],
    tags: Tag[],
    archives: Archive[],
  }> {
    return this.http.get<{
      articles: Article[],
      tags: Tag[],
      archives: Archive[],
    }>(`${environment.apiUrl}/article/latest/${lastDoc}`);
  }

  public search(tag: string = '', archive: string = ''): Observable<{
    articles: Article[],
    tags: Tag[],
    archives: Archive[],
  }> {
    let url = new URL(`${environment.apiUrl}/article/search`);
    if (tag) {
      url.searchParams.set('tag', tag);
    }
    if (archive) {
      url.searchParams.set('archive', archive);
    }
    return this.http.get<{
      articles: Article[],
      tags: Tag[],
      archives: Archive[],
    }>(url.toString());
  }

  public getArticle(id: string): Observable<{
    article: Article,
    recommend: Article[],
  }> {
    return this.http.get<{
      article: Article,
      recommend: Article[],
    }>(`${environment.apiUrl}/article/${id}`);
  }
}
