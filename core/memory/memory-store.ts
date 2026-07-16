export class SalesExecutor {

    execute(input:{
        userId:string;
        message:string;
    }){

        return {

            agent:"SALES_AGENT",

            userId:input.userId,

            status:"READY",

            action:"CREATE_SALES_RESPONSE",

            response:
            "درخواست فروش دریافت شد. در حال بررسی محصول، قیمت و شرایط مشتری هستیم."

        };

    }

}