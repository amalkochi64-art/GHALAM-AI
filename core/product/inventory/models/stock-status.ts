import { ProductRepository } from "./repository/product-repository";
import { ProductSearchEngine } from "./search/product-search-engine";
import { ProductRecommendationEngine } from "./recommendation/product-recommendation-engine";
import { PricingEngine } from "./pricing/pricing-engine";
import { InventoryEngine } from "./inventory/inventory-engine";

export class ProductService {

    private repository;
    private search;
    private recommendation;
    private pricing;
    private inventory;


    constructor(){

        this.repository = new ProductRepository();
        this.search = new ProductSearchEngine();
        this.recommendation = new ProductRecommendationEngine();
        this.pricing = new PricingEngine();
        this.inventory = new InventoryEngine();

    }


    findProduct(query:string){

        const products =
            this.search.search(query);


        return products.map(product=>({

            product,

            price:
            this.pricing.getPrice(product),

            stock:
            this.inventory.check(product),

            recommendations:
            this.recommendation.get(product)

        }));

    }

}