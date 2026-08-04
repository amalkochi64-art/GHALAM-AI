import { Product } from "../models/product-model";
import { ProductRepository } from "../repository/product-repository";

export class ProductService {

    private repository = new ProductRepository();


    create(product: Product){
        return this.repository.add(product);
    }


    getProducts(){
        return this.repository.getAll();
    }


    getProduct(id:string){
        return this.repository.findById(id);
    }


    searchProducts(keyword:string){
        return this.repository.search(keyword);
    }


    updateProduct(id:string,data:Partial<Product>){

        return this.repository.update(
            id,
            data
        );

    }


    deleteProduct(id:string){

        return this.repository.remove(id);

    }


}
