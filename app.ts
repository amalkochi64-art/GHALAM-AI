import { AIOrchestrator } from "./core/orchestrator/ai-orchestrator";


console.log(
"🚀 GHALAM AI CORE ONLINE"
);


const ai = new AIOrchestrator();


const result = ai.process({

 userId:"001",

 message:"قیمت صندلی مدیریتی چنده؟"

});


console.log(result);