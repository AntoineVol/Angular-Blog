export class Article{
    static idCount =4;
    id : number;
    title : String;
    content:String;

    constructor(){
        this.id=Article.idCount++;
    }
}