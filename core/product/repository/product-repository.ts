import { Product } from "../models/product-model";


export class ProductRepository {


    private products: Product[] = [];


    add(product: Product){

        this.products.push(product);

    }


    getAll(){

        return this.products;

    }


    findById(id:string){

        return this.products.find(
            product => product.id === id
        );

    }


    search(keyword:string){

        return this.products.filter(product =>
            product.name.includes(keyword) ||
            product.category.includes(keyword) ||
            product.tags.includes(keyword)
        );

    }

}