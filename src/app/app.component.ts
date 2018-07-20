import { Component } from '@angular/core';
import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : String;
  articles : Array<Article>;
  showList : boolean;
  editArticle:Article;


  constructor(private articleService : ArticleService){

    this.title = 'Les aventuriers du monde';

  }

  ngOnInit(){
    this.articleService.list().subscribe((list)=>this.articles=list)
  }


  
}
