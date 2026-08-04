import { Product } from "../models/product-model";


export class ProductRecommendationEngine {


    recommend(products:Product[]) {

        return products
        .sort(
            (a,b)=>b.stock-a.stock
        )
        .slice(0,5);

    }


    recommendByBudget(
        products:Product[],
        budget:number
    ){

        return products.filter(
            product=>product.price <= budget
        );

    }

}