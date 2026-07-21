import { DecisionEngine } from "../decision-engine/decision-engine";
import { ApprovalEngine } from "../approval/approval-engine";
import { SalesExecutor } from "../../agents/sales-agent/execution/sales-executor";
import { CustomerService } from "../memory/customer/customer-service";


export class AIOrchestrator {

private decisionEngine;
private approvalEngine;
private salesExecutor;
private customerService;


constructor(){

this.decisionEngine = new DecisionEngine();

this.approvalEngine = new ApprovalEngine();

this.salesExecutor = new SalesExecutor();

this.customerService = new CustomerService();

}



async process(input:any){


const customer =
this.customerService.getCustomer(input.userId);



const decision =
this.decisionEngine.analyze(
input.message
);



const approval =
this.approvalEngine.check(
decision
);



const execution =
await this.salesExecutor.execute(
input
);



return {

customer,

decision,

approval,

execution,

status:"PROCESSED",

timestamp:new Date()

};


}


}