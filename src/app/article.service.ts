import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from './article';
import { ARTICLES } from './mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private subject : BehaviorSubject<Array<Article>>;

  constructor() {
    this.subject = new BehaviorSubject(new Array());
   }
   get articles(): Observable<Array<Article>>{
     return this.subject.asObservable();
   }

   loadMock(){
     let mock:Array<Article>= ARTICLES;
     this.subject.next(mock);
   }
}
