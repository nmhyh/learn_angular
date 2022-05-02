import { Injectable } from "@angular/core";
import { map, Observable, of, shareReplay } from "rxjs";
import { Article } from "../model/article";

@Injectable({
  providedIn: 'root',
})

export class ArticleService {
  constructor() {}
  get articles$() {
    return of<Article[]>([
      {title: 'Title 1', body: 'Lorem ipsum dolor sit aet consectetur adipiscing', slug: 'title-1'},
      {title: 'Title 2', body: 'Lorem ipsum dolor sit aet consectetur adipiscing', slug: 'title-2'}
    ]).pipe(shareReplay(1))
  }

  getArticle(slug: string): Observable<Article | undefined> {
    return this.articles$.pipe(map(articles => articles.find(ar => ar.slug === slug)));
  }
}
