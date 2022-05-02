import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, Observable, pluck, switchMap } from 'rxjs';
import { Article } from '../../model/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article$: Observable<Article | undefined> | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe(console.log); // {slug: value}
    // this.route.paramMap.subscribe(console.log);
    // console.log('----------------------------');
    // console.log(this.route.snapshot.params);
    // console.log(this.route.snapshot.paramMap);
    this.article$ = this.route.params.pipe(
      pluck('slug'),
      switchMap(slug => this.articleService.getArticle(slug)),
      filter(article => !!article)
    );
  }

}
