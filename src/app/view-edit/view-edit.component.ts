import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import {filter, map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-view-edit',
  templateUrl: './view-edit.component.html',
  styleUrls: ['./view-edit.component.css']
})
export class ViewEditComponent implements OnInit {
  article:Article;

  constructor(private articleService : ArticleService, private activatedRoute:ActivatedRoute, private location:Location) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.pipe(
      filter((paramMap)=>!paramMap.has('id'))
    ).subscribe(()=>this.article=undefined);
    
    this.activatedRoute.queryParamMap.pipe(
      filter((paramMap)=>paramMap.has('id')),
      map((paramMaP)=>paramMaP.get('id')),
      map((id:string)=>parseInt(id)),
      switchMap((id:number)=>this.articleService.read(id))
    ).subscribe((article)=>this.article=article)
  }

  create(article:Article){
    this.articleService.create(article).subscribe({
      error:(errorMessage)=> console.log(`Impossible de créer l'article ${article} : ${errorMessage}`),
      next:(newArticle)=> console.log(`Article ${newArticle} créé avec succès !`),
      complete:()=>{
        console.log('Création du nouvel article terminée avec succès !')
        this.location.back();
      }
      })  
  }

  update(article:Article){
    this.articleService.update(article)
    .subscribe({
      complete: () => {
        console.log(`Article d'id ${article.id} supprimé avec succès`),
        this.location.back();
    },
      error: (message) => console.log(`impossible de supprimer l'article : ${message}`)
    });
  }
}

