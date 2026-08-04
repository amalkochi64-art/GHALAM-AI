export class ProductRecommendationEngine {

    recommend(products:any[], customer:any){

        return products.map(product => ({
            product,
            score: 80,
            reason: "Recommended based on customer profile"
        }));

    }

}