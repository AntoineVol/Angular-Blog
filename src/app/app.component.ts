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
    this.showList=true;
    this.title = 'Les aventuriers du monde';
    // this.articles = ARTICLES;
  }

  ngOnInit(){
    this.articleService.list().subscribe((list)=>this.articles=list)
  }

  handleCreate(article:Article){
    this.articleService.create(article).subscribe({
      error:(errorMessage)=> console.log(`Impossible de créer l'article ${article} : ${errorMessage}`),
      next:(newArticle)=> console.log(`Article ${newArticle} créé avec succès !`),
      complete:()=>console.log('Création du nouvel article terminée avec succès !')
      
    });
    this.showList=true;

  }
  handleDelete(idArticle:number){
    this.articleService.delete(idArticle).subscribe({
      complete : ()=>console.log(`Article de l'id : ${idArticle} supprimé avec succès`),
      error : (message)=>console.log(`Impossible de supprimer l'article de l'id : ${idArticle}`)
    })


  }
  showEdit(idArticle:number){
    this.articleService.read(idArticle).subscribe((article)=>{
      this.editArticle=article; 
      this.showList=false
    })
    console.log("Edit ->app id : " + idArticle);
    this.editArticle = this.articles.find((a)=>a.id===idArticle);
    this.showList=false;
  }
  handleEdit(article:Article){
    this.articleService.update(article).subscribe({
      complete : ()=>console.log(`Article de l'id : ${article} mis à jour avec succès`),
      error : (message)=>console.log(`Impossible de mettre à jour l'article de l'id : ${article}`)
    })
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
