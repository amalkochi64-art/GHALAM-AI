import { DecisionEngine } from "../decision-engine/decision-engine";
import { ApprovalEngine } from "../approval/approval-engine";
import { SalesExecutor } from "../../agents/sales-agent/execution/sales-executor";


export class AIOrchestrator {

    private decisionEngine;
    private approvalEngine;
    private salesExecutor;


    constructor() {

        this.decisionEngine = new DecisionEngine();
        this.approvalEngine = new ApprovalEngine();
        this.salesExecutor = new SalesExecutor();

    }


    async process(input: {
        userId: string;
        message: string;
    }) {


        const decision =
            this.decisionEngine.analyze(input.message);



        const approval =
            this.approvalEngine.check(decision);



        const execution =
            await this.salesExecutor.execute({
                userId: input.userId,
                message: input.message
            });



        return {

            userId: input.userId,

            message: input.message,

            decision,

            approval,

            execution,

            status: "PROCESSED",

            timestamp: new Date()

        };

    }

}