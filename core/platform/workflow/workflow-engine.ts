import { Workflow } from "./workflow";


export class WorkflowEngine {



private workflows:Workflow[]=[


{
id:"lead-to-sale",
name:"Lead To Sale",
steps:[
"capture-lead",
"qualify",
"offer",
"followup",
"close"
]
},


{
id:"customer-support",
name:"Customer Support",
steps:[
"receive",
"classify",
"answer",
"resolve"
]
}



];



run(
id:string
){

return this.workflows.find(
w=>w.id===id
);

}



list(){

return this.workflows;

}


}
