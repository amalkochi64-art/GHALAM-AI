import { Product } from "../models/product-model";


export class ProductRecommendationEngine {


recommend(products:Product[]){


return products

.sort(
(a,b)=>
(b.sales ?? 0)
-
(a.sales ?? 0)
)

.slice(0,5);


}


}
