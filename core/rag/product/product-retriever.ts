import { SemanticSearch } from "../../memory/semantic/semantic-search";


export class ProductRetriever {


    private memory =
        new SemanticSearch();



    addProduct(
        id:string,
        text:string
    ){

        return this.memory.index(
            id,
            text
        );

    }



    search(
        query:string
    ){

        return this.memory.search(
            query
        );

    }


}
