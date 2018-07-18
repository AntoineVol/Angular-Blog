import { Component } from '@angular/core';
import { Article } from './article';
import { ARTICLES } from './mock-articles'
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
    this.showList=true;
    this.title = 'Les aventuriers du monde';
    // this.articles = ARTICLES;
  }

  ngOnInit(){
    this.articleService.articles.subscribe((result)=>this.articles=result);
    this.articleService.loadMock();
  }

  handleCreate(article:Article){
    this.articles.push(article);
    this.showList=true;

  }
  handleDelete(idArticle:number){
    console.log("Suppression ->app : " + idArticle);
    this.updateArticle(idArticle);
  }
  showEdit(idArticle:number){
    console.log("Edit ->app id : " + idArticle);
    this.editArticle = this.articles.find((a)=>a.id===idArticle);
    this.showList=false;
  }
  handleEdit(article:Article){
    console.log("Edit ->appHandle article : " + article);
    this.updateArticle(article.id,article);
    this.editArticle=undefined;
    this.showList=true;
  }

  updateArticle(id:number, article?:Article){
    let index = this.articles.findIndex((a)=>a.id===id);
    if(index>=0){
      if(article){
        console.log("Edit ->update id : " +  index);
        this.articles.splice(index,1,article);
        console.log("Edit ->update list : " +  this.articles);
      }else{
        console.log("Suppression ->update id : " +  index);
        this.articles.splice(index,1);
      }
    }

  }
  
}
