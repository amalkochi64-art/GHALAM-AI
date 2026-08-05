import { VectorStore } from "../vector/vector-store";
import { EmbeddingEngine } from "../vector/embedding-engine";

export class SemanticSearch {

    private store = new VectorStore();
    private embedding = new EmbeddingEngine();

    index(id:string,text:string){

        return this.store.add({

            id,
            text,
            embedding:this.embedding.embed(text)

        });

    }

    search(query:string){

        return this.store.search(
            this.embedding.embed(query)
        );

    }

}
