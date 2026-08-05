import { RAGEngine } from "./core/rag/engine/rag-engine";


const rag =
new RAGEngine();



rag.addKnowledge(
"product-001",
"ÕäÏáí ãÏíÑíÊí Ñãí ãÔ˜í ÈÇ Çíå İáÒí æ ØÑÇÍí áæ˜Ó"
);


rag.addKnowledge(
"product-002",
"ãíÒ ãÏíÑíÊ MDF Ñä ÑÏæíí ÈÇ ˜Ôæ Şİá ÏÇÑ"
);



console.log(
rag.ask(
"ÕäÏáí áæ˜Ó ãÏíÑíÊí"
)
);

