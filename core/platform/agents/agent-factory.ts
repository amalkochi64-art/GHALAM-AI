import { AgentDefinition } from "./agent-definition";


export class AgentFactory {



private agents:AgentDefinition[]=[


{
id:"sales-agent",
name:"AI Sales Agent",
role:"seller",
abilities:[
"search-product",
"quotation",
"negotiation",
"followup"
]
},



{
id:"support-agent",
name:"AI Support Agent",
role:"support",
abilities:[
"faq",
"ticket",
"customer-care"
]
},



{
id:"marketing-agent",
name:"AI Marketing Agent",
role:"marketing",
abilities:[
"content",
"campaign",
"analysis"
]
}



];



create(
id:string
){

return this.agents.find(
a=>a.id===id
);

}



list(){

return this.agents;

}


}
