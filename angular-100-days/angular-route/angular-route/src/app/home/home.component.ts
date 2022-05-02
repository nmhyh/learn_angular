import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles$: Observable<Article[]> | undefined;
  constructor(
    private readonly articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.articles$ = this.articleService.articles$;
  }

}
