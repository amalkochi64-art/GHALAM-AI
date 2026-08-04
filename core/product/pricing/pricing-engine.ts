import { Product } from "../models/product-model";

export class PricingEngine {


    getPrice(product: Product) {

        return {
            productId: product.id,
            productName: product.name,
            price: product.price
        };

    }


    calculateDiscount(
        price:number,
        percent:number
    ){

        return price - (price * percent / 100);

    }


    comparePrice(
        price:number,
        competitor:number
    ){

        return {
            cheaper: price < competitor,
            difference: competitor - price
        };

    }

}