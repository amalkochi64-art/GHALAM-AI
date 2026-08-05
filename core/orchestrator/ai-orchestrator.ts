import {ApplicationContainer} from "../container/v2/application-container";


export class AIOrchestrator{


private container:ApplicationContainer;



constructor(){

this.container=new ApplicationContainer();

}




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

return this.container.offerWorkflow.createOffer(
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
