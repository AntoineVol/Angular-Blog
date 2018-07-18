import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';
import { Article } from '../article';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
    
  @Input() article : Article;
  @Output() onCreate : EventEmitter<Article>
  @Output() onEdit : EventEmitter<Article>
  private model : Article;

  
   constructor() { 
     this.model=new Article();
     this.onCreate=new EventEmitter();
     this.onEdit=new EventEmitter();
    }
    
    ngOnInit() {
      if(this.article!=null){
        this.model=this.article;
      }
    }
    
    submit(form:NgForm){
      let data : Article = JSON.parse(JSON.stringify(this.model))
      if(this.article){
        console.log("Edit ->edit article : " + data);
        this.onEdit.emit(data)
      }else{
        console.log("Create ->edit article : " + data);
        this.onCreate.emit(data);
      }
      form.resetForm();
    }
}
