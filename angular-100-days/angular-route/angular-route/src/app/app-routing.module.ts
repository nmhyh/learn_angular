import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ArticleGuard } from './guards/article.guard';
import { ChildHomeComponent } from './home/child-home/child-home.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: 'child', component: ChildHomeComponent }],
  },
  {
    path: 'article',
    loadChildren: () =>
      import('./articles/articles.module').then((m) => m.ArticleModule),
    data: {
      feature: 'articles',
      permissions: 'article-read',
    },
    canActivate: [ArticleGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: !environment.production }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
