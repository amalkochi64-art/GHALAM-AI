import { BusinessTemplate } from "../templates/business-template";


export class TemplateRegistry {


private templates:BusinessTemplate[]=[


{
id:"furniture",

name:"Office Furniture",

industry:"furniture",

modules:[
"sales",
"crm",
"rag",
"customer-brain",
"marketing"
],

agents:[
"sales-agent",
"customer-agent",
"marketing-agent"
],

workflows:[
"lead",
"quotation",
"followup",
"after-sale"
]

},



{
id:"restaurant",

name:"Restaurant",

industry:"restaurant",

modules:[
"reservation",
"crm",
"marketing",
"customer-support"
],

agents:[
"reservation-agent",
"support-agent",
"marketing-agent"
],

workflows:[
"booking",
"customer-care",
"promotion"
]

},



{
id:"clinic",

name:"Clinic",

industry:"clinic",

modules:[
"appointment",
"crm",
"support",
"notification"
],

agents:[
"appointment-agent",
"support-agent"
],

workflows:[
"appointment",
"reminder"
]

}


];



get(id:string){

return this.templates.find(
t=>t.id===id
);

}



list(){

return this.templates;

}


}
