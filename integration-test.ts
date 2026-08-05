import {AIOrchestrator} from "./core/orchestrator/ai-orchestrator";


const ai=new AIOrchestrator();


console.log(

ai.execute(

"sales",

{
id:"offer-001",
customerId:"customer-001",
products:[
"میز مدیریت"
],
amount:50000000

}

)

);

