import { DecisionEngine } from "../decision-engine/decision-engine";
import { ApprovalEngine } from "../approval/approval-engine";
import { MemoryStore } from "../memory/memory-store";


export class AIOrchestrator {


private decisionEngine:DecisionEngine;
private approvalEngine:ApprovalEngine;
private memory:MemoryStore;



constructor(){

this.decisionEngine =
new DecisionEngine();


this.approvalEngine =
new ApprovalEngine();


this.memory =
new MemoryStore();


}



process(input:{
userId:string;
message:string;
}){


const decision =
this.decisionEngine.analyze(
input.message
);



const approval =
this.approvalEngine.check(
decision
);



const result={

userId:
input.userId,

message:
input.message,

decision,

approval,

status:
"PROCESSED",

timestamp:
new Date()

};



this.memory.save(result);



return result;


}



}