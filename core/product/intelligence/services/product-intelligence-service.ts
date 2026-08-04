import { ProductIntelligence } from "../models/product-intelligence-model";
import { Product } from "../../models/product-model";


export class ProductIntelligenceService {


analyze(product:Product):ProductIntelligence {


const popularity = product.sales ?? 0;


const demandScore = popularity * 0.4;

const salesScore = popularity * 0.3;

const recommendationScore = popularity * 0.3;


return {

productId:product.id,

popularity,

demandScore,

salesScore,

recommendationScore,

finalScore:
demandScore +
salesScore +
recommendationScore

};


}


}
