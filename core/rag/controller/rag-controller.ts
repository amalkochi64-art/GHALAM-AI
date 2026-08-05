import { RAGService } from "../service/rag-service";


export class RAGController{


constructor(
private rag:RAGService
){}



handle(
message:string
){

return this.rag.answer(
message
);


}


}
