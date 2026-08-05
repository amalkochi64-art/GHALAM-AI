import {ApprovalRequest} from "./approval-request";


export class ApprovalEngine{


private requests:ApprovalRequest[]=[];



request(
action:string
){

const item={

id:Date.now().toString(),

action,

approved:false,

createdAt:new Date()

};


this.requests.push(item);


return item;

}



approve(id:string){

const item=this.requests.find(
x=>x.id===id
);


if(item){

item.approved=true;

}


return item;

}



list(){

return this.requests;

}


}
