import { Component, OnInit,EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Article } from '../article';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnChanges {
  @Input() article: Article;
	@Output() onCreate: EventEmitter<Article>;
  @Output() onUpdate: EventEmitter<Article>;
  private model : Article;

  
   constructor() {
      this.model=new Article();
      this.onCreate= new EventEmitter();
      this.onUpdate= new EventEmitter();
    }
        
    ngOnChanges(changes:SimpleChanges){
      if (changes.article.currentValue) {
        this.model = this.article;
      }else{
        this.model=new Article();
      }
    }

    
    submit(form:NgForm){
      let data : Article = JSON.parse(JSON.stringify(this.model))
      if(this.article){
        console.log("Edit ->edit article : " + data);
        this.onUpdate.emit(data)
      }else{
        console.log("Create ->edit article : " + data);
        this.onCreate.emit(data);
      }
      form.resetForm();
    }
}
