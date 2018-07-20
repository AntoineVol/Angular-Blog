import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ArticleService } from './article.service';
import { AppRoutingModule } from './app-routing.module';
import { ViewListComponent } from './view-list/view-list.component';
import { ViewEditComponent } from './view-edit/view-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ListArticlesComponent,
    EditArticleComponent,
    ViewListComponent,
    ViewEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
