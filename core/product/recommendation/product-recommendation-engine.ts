import { Product } from "../models/product-model";


export class ProductRecommendationEngine {


    recommend(products:Product[]){


        return products
        .sort(
            (a,b)=>
            (b.stock ?? 0) -
            (a.stock ?? 0)
        )
        .slice(0,5);


    }


}
