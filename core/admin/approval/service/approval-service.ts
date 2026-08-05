import {ApprovalEngine} from "../approval-engine";

export class ApprovalService{

constructor(
private engine=new ApprovalEngine()
){}


requestApproval(
action:string
){
return this.engine.request(action);
}


approve(
id:string
){
return this.engine.approve(id);
}


list(){
return this.engine.list();
}


}
