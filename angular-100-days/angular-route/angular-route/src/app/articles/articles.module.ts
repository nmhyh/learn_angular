import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";
import { ArticleListComponent } from './article-list/article-list.component';
import { articleRoutes } from "./articles-routing.routes";

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(articleRoutes),
  ]
})
export class ArticleModule { }
