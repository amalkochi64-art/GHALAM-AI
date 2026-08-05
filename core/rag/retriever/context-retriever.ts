import { SemanticSearch } from "../../memory/semantic/semantic-search";

export class ContextRetriever {

    private memory = new SemanticSearch();


    addContext(
        id:string,
        text:string
    ){

        return this.memory.index(
            id,
            text
        );

    }


    retrieve(
        query:string
    ){

        return this.memory.search(query);

    }

}
