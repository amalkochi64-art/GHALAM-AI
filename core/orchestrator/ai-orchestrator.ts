
import { DecisionEngine } from "../decision-engine/decision-engine";
import { ApprovalEngine } from "../approval/approval-engine";
import { SalesExecutor } from "../../agents/sales-agent/execution/sales-executor";

export class AIOrchestrator {

    private decisionEngine: DecisionEngine;
    private approvalEngine: ApprovalEngine;
    private salesExecutor: SalesExecutor;


    constructor(){

        this.decisionEngine = new DecisionEngine();
        this.approvalEngine = new ApprovalEngine();
        this.salesExecutor = new SalesExecutor();

    }


    process(input:any){

        const decision = this.decisionEngine.analyze(input.message);


        const approval = this.approvalEngine.check(decision);


        if(approval.approved){

            return this.salesExecutor.execute(input);

        }


        return {

            status:"WAITING_APPROVAL",

            decision,

            approval

        };

    }

}