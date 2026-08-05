import { Plugin } from "./plugin";


export class PluginRegistry {


private plugins:Plugin[]=[


{
id:"sales-core",
name:"Sales Core",
version:"1.0",
industry:"all",
enabledModules:[
"sales",
"crm",
"quotation"
]
},



{
id:"marketing-ai",
name:"Marketing AI",
version:"1.0",
industry:"all",
enabledModules:[
"campaign",
"social",
"ads"
]
},



{
id:"customer-brain",
name:"Customer Brain",
version:"1.0",
industry:"all",
enabledModules:[
"memory",
"behavior",
"scoring"
]
}



];



get(
id:string
){

return this.plugins.find(
p=>p.id===id
);

}



list(){

return this.plugins;

}


}
