import { MemoryStore } from "./memory/memory-store";
import { DecisionEngine } from "./decision/decision-engine";


export class AIBrain {



memory =
new MemoryStore();



decision =
new DecisionEngine();




process(

tenantId:string,

userId:string,

message:string

){



this.memory.save({

id:
Date.now().toString(),

tenantId,

userId,

type:"conversation",

content:message,

metadata:{},

createdAt:new Date()

});





return this.decision.decide({


tenantId,

userId,

message,

history:
this.memory.getUserMemory(userId)


});



}



}
