import { Product } from "../../models/product-model";
import { ProductIntelligence } from "../models/product-intelligence-model";


export class ProductIntelligenceService {


    analyze(product:Product):ProductIntelligence {


        return {

            productId:product.id,

            popularity:
            product.stock > 10 ? 80 : 50,


            demandScore:
            product.stock > 0 ? 70 : 20,


            salesScore:
            product.price < 10000000 ? 90 : 60,


            recommendationScore:75

        };


    }

}