export async function executeSalesFlow(data: any) {

    return {
        agent: "sales-agent",
        status: "EXECUTED",
        action: "SALES_RESPONSE_READY",
        input: data,
        timestamp: new Date()
    };

}