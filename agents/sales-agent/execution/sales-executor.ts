export class SalesExecutor {

    async execute(input: any) {

        return {
            agent: "sales-agent",
            status: "EXECUTED",
            action: "START_SALES_FLOW",
            input,
            timestamp: new Date()
        };

    }

}