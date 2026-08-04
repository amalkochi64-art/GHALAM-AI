import { AIOrchestrator } from "./ai-orchestrator";

const ai = new AIOrchestrator();

const result = ai.process({

    userId: "001",

    message: "قیمت میز مدیریت چنده؟"

});


console.log("🔥 ORCHESTRATOR TEST");

console.log(result);