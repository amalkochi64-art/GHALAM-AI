export async function executeSalesFlow(data:any){

    return {
        agent:"sales-agent",
        status:"EXECUTED",
        action:"START_SALES_RESPONSE",
        data,
        timestamp:new Date()
    };

}