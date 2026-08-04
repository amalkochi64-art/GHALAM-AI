import { Product } from "../models/product-model";


export interface ProductDecision {


productId:string;


decision:
"PROMOTE"
|
"HOLD"
|
"DISCOUNT"
|
"REMOVE";


reason:string;


}


export class ProductDecisionEngine {



decide(product:Product):ProductDecision{


if(product.stock === 0){

return {

productId:product.id,

decision:"HOLD",

reason:"Out of stock"

};

}



if((product.sales ?? 0) > 100){

return {

productId:product.id,

decision:"PROMOTE",

reason:"High sales"

};

}



return {

productId:product.id,

decision:"HOLD",

reason:"Normal performance"

};


}



}
