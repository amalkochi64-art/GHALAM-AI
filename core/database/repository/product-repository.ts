export interface Product{

id:string;
title:string;
category:string;
price:number;

}


export class ProductRepository{


private products:Product[]=[];


add(product:Product){

this.products.push(product);

return product;

}


search(text:string){

return this.products.filter(
p=>p.title.includes(text)
);

}


list(){

return this.products;

}


}
