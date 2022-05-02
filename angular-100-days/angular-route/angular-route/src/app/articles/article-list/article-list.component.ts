import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles$: Observable<Article[]> | undefined;
  constructor(
    private readonly articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.articles$ = this.articleService.articles$;
  }
}
