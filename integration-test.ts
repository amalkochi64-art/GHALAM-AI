import {AIOrchestrator} from "./core/orchestrator/ai-orchestrator";


const ai = new AIOrchestrator();


const result = ai.process({

    intent:"sales",

    data:{
        id:"offer-001",
        customerId:"customer-001",
        products:[
            "میز مدیریت"
        ],
        amount:50000000
    }

});


console.log(
    JSON.stringify(
        result,
        null,
        2
    )
);