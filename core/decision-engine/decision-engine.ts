export class DecisionEngine {


    analyze(message:string){


        const text =
        message.toLowerCase();


        let intent =
        "GENERAL";


        if(
            text.includes("قیمت") ||
            text.includes("خرید") ||
            text.includes("سفارش")
        ){

            intent="SALE";

        }


        return {

            intent,

            confidence:80,

            requiresApproval:
            intent==="SALE",

            action:
            intent==="SALE"
            ?
            "START_SALES_FLOW"
            :
            "ANSWER"

        };

    }

}