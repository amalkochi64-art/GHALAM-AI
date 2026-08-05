import {AIBrain} from "./core/brain/ai-brain";
import {SalesPipeline} from "./core/sales/pipeline/sales-pipeline";
import {KnowledgeEngine} from "./core/knowledge/knowledge-engine";
import {ApprovalEngine} from "./core/admin/approval/approval-engine";


const brain=new AIBrain();

const sales=new SalesPipeline();

const knowledge=new KnowledgeEngine();

const approval=new ApprovalEngine();



console.log(
brain.process(
"GHALAM-001",
"user-001",
"قیمت میز مدیریت"
)
);



console.log(
sales.create({

id:"lead-001",

customerId:"user-001",

stage:"new",

value:50000000,

createdAt:new Date()

})
);



console.log(
knowledge.add({

id:"p1",

category:"desk",

title:"میز مدیریت",

content:"میز مدیریت کلاسیک MDF"

})
);



console.log(
approval.request(
"send quotation"
)
);
