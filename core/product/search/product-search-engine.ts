import { ProductRepository } from "../repository/product-repository";

export class ProductSearchEngine {

    constructor(
        private repository: ProductRepository
    ){}

    search(keyword:string){

        return this.repository
        .getAll()
        .filter(product =>
            product.name.includes(keyword) ||
            product.category.includes(keyword)
        );

    }
}