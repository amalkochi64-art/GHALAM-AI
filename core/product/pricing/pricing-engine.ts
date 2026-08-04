import { Product } from "../models/product-model";


export class PricingEngine {


calculate(product:Product){


return {

productId:product.id,

price:product.price,

discount:0,

finalPrice:product.price

};


}


}
