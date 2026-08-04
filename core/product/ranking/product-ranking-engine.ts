import { Product } from "../models/product-model";


export class ProductRankingEngine {


    rank(products:Product[]){

        return products.sort(
            (a,b)=>{

                const scoreA =
                a.stock + a.price;

                const scoreB =
                b.stock + b.price;


                return scoreB-scoreA;

            }
        );

    }

}