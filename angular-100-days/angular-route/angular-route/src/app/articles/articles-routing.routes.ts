import { Routes } from '@angular/router';
import { ArticleGuard } from '../guards/article.guard';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';

export const articleRoutes: Routes = [
  {
    path: '',
    component: ArticleListComponent,
  },
  {
    path: ':slug',
    canActivateChild: [ArticleGuard],
    children: [
      {
        path: '',
        component: ArticleDetailComponent,
      },
      // {
      //   path: 'edit',
      //   component: ArticleDetailEditComponent,
      // },
    ],
  },
];
