import {ServiceContainer} from "../container/service-container";
import {OfferWorkflow} from "../sales/offer/offer-workflow";


export class AIOrchestrator{


private workflow=new OfferWorkflow();


constructor(
private container=new ServiceContainer()
){}



execute(
intent:string,
data:any
){


const decision =
this.container.sales.process(intent);



this.container.events.emit(
"AI_DECISION",
decision
);



if(
decision.action==="CREATE_OFFER"
){


return this.workflow.createOffer(
data
);


}



return decision;


}



process(input:any){


return this.execute(

input.intent ?? "unknown",

input.data ?? input

);


}


}
