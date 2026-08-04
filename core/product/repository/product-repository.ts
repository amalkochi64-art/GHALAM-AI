import { Product } from "../models/product-model";


export class ProductRepository {


private products: Product[] = [];



add(product: Product){

this.products.push(product);

return product;

}



getAll(): Product[]{

return this.products;

}



findById(id:string){

return this.products.find(
product => product.id === id
);

}



search(keyword:string){


const key = keyword.toLowerCase();



return this.products.filter(product =>


product.name.toLowerCase().includes(key) ||

product.category.toLowerCase().includes(key) ||

(product.tags?.some(
tag => tag.toLowerCase().includes(key)
) ?? false)


);



}



update(id:string,data:Partial<Product>){

const product = this.findById(id);


if(!product){

return null;

}


Object.assign(product,data);


return product;

}



remove(id:string){

this.products =
this.products.filter(
product => product.id !== id
);


return true;

}


}
