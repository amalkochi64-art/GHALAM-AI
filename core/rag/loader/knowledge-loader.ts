import { RAGService } from "../service/rag-service";


export class KnowledgeLoader {


    constructor(
        private rag:RAGService
    ){}



    loadProducts(){

        this.rag.addKnowledge(
            "chair-001",
            "ÕäÏáí ãÏíÑíÊí Ñãí ãÔ˜í¡ Çíå İáÒí¡ ãäÇÓÈ ãÏíÑÇä¡ ØÑÇÍí áæ˜Ó"
        );


        this.rag.addKnowledge(
            "chair-002",
            "ÕäÏáí ˜ÇÑãäÏí ÇÑæäæãí˜¡ ÊäÙíã ÇÑÊİÇÚ¡ ãäÇÓÈ ÇÓÊİÇÏå ØæáÇäí"
        );


        this.rag.addKnowledge(
            "desk-001",
            "ãíÒ ãÏíÑíÊ MDF ÑÏæíí¡ ˜Ôæ Şİá ÏÇÑ¡ ØÑÇÍí ˜áÇÓí˜"
        );


        this.rag.addKnowledge(
            "cabinet-001",
            "˜ãÏ ÈÇíÇäí İáÒí¡ ãŞÇæã¡ ãäÇÓÈ ÓÇÒãÇä åÇ"
        );

    }


}
