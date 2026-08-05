import { ReasoningEngine } from "../reasoning/reasoning-engine";


export class DecisionEngine {


private reasoning =
new ReasoningEngine();



decide(
context:any
){


const result =
this.reasoning.analyze(
context
);



return {


action:
this.mapAction(
result.intent
),


confidence:
result.confidence,


intent:
result.intent


};


}



private mapAction(
intent:string
){


switch(intent){


case "sales":
return "START_SALES";


case "support":
return "START_SUPPORT";


default:
return "GENERAL_RESPONSE";


}



}



}
