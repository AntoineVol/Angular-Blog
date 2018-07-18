import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ArticleService } from './article.service';


@NgModule({
  declarations: [
    AppComponent,
    ListArticlesComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }