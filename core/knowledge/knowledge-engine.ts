import {KnowledgeItem} from "./knowledge-item";


export class KnowledgeEngine{


private data:KnowledgeItem[]=[];


add(
item:KnowledgeItem
){

this.data.push(item);

return item;

}



search(
text:string
){

return this.data.filter(
x=>x.content.includes(text)
);

}


list(){

return this.data;

}


}
