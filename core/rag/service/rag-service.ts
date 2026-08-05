import { ProductRetriever } from "../product/product-retriever";


export class RAGService {


    private retriever =
        new ProductRetriever();



    addKnowledge(
        id:string,
        text:string
    ){

        return this.retriever.addProduct(
            id,
            text
        );

    }



    answer(
        query:string
    ){

        const products =
            this.retriever.search(query);



        return {

            query,

            products,

            message:

محصولات مرتبط:





        };

    }


}
