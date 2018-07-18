import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Article } from '../article';


@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
  @Input() articles : Array<Article>;
  @Output() onEdit : EventEmitter<number>;
  @Output() onDelete : EventEmitter<number>;

  constructor() {
    this.onEdit = new EventEmitter<number>();
    this.onDelete = new EventEmitter<number>();
   }

  ngOnInit() {
  }

  delete(article:Article){
    if(article!=null && article.id!=null){
      console.log("Suppression ->list-article id : " + article.id);
      this.onDelete.emit(article.id);
    }
  }
  
  edit(article:Article){
    if(article!=null && article.id!=null){
      console.log("Edit ->list-article id : " + article.id);
      this.onEdit.emit(article.id);
    }
  }
  
}
