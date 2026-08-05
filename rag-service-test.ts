import { RAGService } from "./core/rag/service/rag-service";
import { KnowledgeLoader } from "./core/rag/loader/knowledge-loader";
import { RAGController } from "./core/rag/controller/rag-controller";


const rag =
new RAGService();


const loader =
new KnowledgeLoader(rag);


loader.loadProducts();


const controller =
new RAGController(rag);



console.log(
    controller.handle(
        "میز مدیریت لوکس میخواهم"
    )
);
