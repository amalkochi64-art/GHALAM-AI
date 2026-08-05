import { RAGService } from "../service/rag-service";


export class KnowledgeLoader {


constructor(
private rag:RAGService
){}



loadProducts(){


this.rag.addKnowledge(
"chair-001",
"صندلی مدیریتی چرمی مشکی پایه فلزی طراحی لوکس"
);



this.rag.addKnowledge(
"chair-002",
"صندلی کارمندی ارگونومیک تنظیم ارتفاع مناسب کار طولانی"
);



this.rag.addKnowledge(
"desk-001",
"میز مدیریت MDF گردویی کشودار طراحی کلاسیک"
);



this.rag.addKnowledge(
"cabinet-001",
"کمد بایگانی فلزی مقاوم مناسب سازمان ها"
);



}


}
