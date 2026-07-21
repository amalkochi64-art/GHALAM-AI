import { AIOrchestrator } from "./core/orchestrator/ai-orchestrator";


console.log(
"🚀 GHALAM AI CORE ONLINE"
);


const ai = new AIOrchestrator();


async function main(){

const result = await ai.process({

 userId:"001",

 message:"قیمت میز مدیریت"

});



console.dir(result, { depth: null });
}


main();