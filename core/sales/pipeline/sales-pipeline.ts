import {SalesLead} from "./sales-lead";


export class SalesPipeline{


private leads:SalesLead[]=[];


create(
lead:SalesLead
){

this.leads.push(lead);

return lead;

}


move(
id:string,
stage:string
){

const lead=this.leads.find(
x=>x.id===id
);


if(lead){

lead.stage=stage;

}


return lead;

}


list(){

return this.leads;

}


}
