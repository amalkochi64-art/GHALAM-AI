import { Product } from "../models/product-model";
import { ProductRepository } from "../repository/product-repository";
import { ProductBrain } from "../brain/product-brain";


export class ProductService {


private repository =
new ProductRepository();


private brain =
new ProductBrain();



create(product:Product){

return this.repository.add(product);

}



getProducts(){

return this.repository.getAll();

}



getProduct(id:string){

return this.repository.findById(id);

}



search(keyword:string){

return this.repository.search(keyword);

}



analyze(product:Product){

return this.brain.analyze(product);

}



recommend(){

return this.brain.recommend(
this.repository.getAll()
);

}



update(
id:string,
data:Partial<Product>
){

return this.repository.update(
id,
data
);

}



delete(id:string){

return this.repository.remove(id);

}


}
