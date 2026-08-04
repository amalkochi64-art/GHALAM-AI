export class PricingEngine {

    calculate(product:any){

        return {
            productId: product.id,
            price: product.price,
            discount: 0,
            finalPrice: product.price
        };

    }

}