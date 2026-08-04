import { Product } from "../models/product-model";

import { InventoryEngine }
from "../inventory/inventory-engine";

import { PricingEngine }
from "../pricing/pricing-engine";

import { ProductRecommendationEngine }
from "../recommendation/product-recommendation-engine";

import { ProductIntelligenceService }
from "../intelligence/services/product-intelligence-service";


export class ProductBrain {


inventory =
new InventoryEngine();


pricing =
new PricingEngine();


recommendation =
new ProductRecommendationEngine();


intelligence =
new ProductIntelligenceService();



analyze(product:Product){


return {

product,

stock:
this.inventory.checkStock(product),

price:
this.pricing.calculate(product),

intelligence:
this.intelligence.analyze(product)

};


}


recommend(products:Product[]){

return this.recommendation.recommend(products);

}


}
