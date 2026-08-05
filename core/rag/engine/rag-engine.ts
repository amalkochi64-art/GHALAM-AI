import { ContextRetriever } from "../retriever/context-retriever";
import { ResponseGenerator } from "../generator/response-generator";


export class RAGEngine {


    private retriever =
        new ContextRetriever();


    private generator =
        new ResponseGenerator();



    addKnowledge(
        id:string,
        text:string
    ){

        return this.retriever.addContext(
            id,
            text
        );

    }



    ask(
        question:string
    ){

        const context =
            this.retriever.retrieve(
                question
            );


        return this.generator.generate(
            question,
            context
        );

    }


}
