import {ServiceContainer} from "../container/service-container";


export class AIOrchestrator{


constructor(
private container=new ServiceContainer()
){}



execute(
intent:string,
data:any
){


const decision=
this.container.sales.process(intent);



this.container.events.emit(
"AI_DECISION",
decision
);



if(
decision.action==="CREATE_OFFER"
){


return this.container.offer.create(data);


}



return decision;


}


}
