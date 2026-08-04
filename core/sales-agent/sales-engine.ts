import { CustomerProfile } from "../customer-intelligence/models/customer-profile";


export class SalesEngine {

    constructor() {
        console.log("✅ GHALAM Sales Engine Initialized");
    }


    start(customer: CustomerProfile) {

        return {

            status: "ACTIVE",

            customer: {
                id: customer.id,
                name: customer.name
            },

            salesFlow: {

                currentStage: "NEW_LEAD",

                nextStep: "CUSTOMER_ANALYSIS"

            }

        };

    }


    analyze(customer: CustomerProfile) {

        let score = 0;


        if(customer.budget) {
            score += 30;
        }


        if(customer.interests?.length) {
            score += 40;
        }


        if(customer.purchaseStage) {
            score += 30;
        }


        return {

            customerId: customer.id,

            score,

            status:

                score >= 70
                ? "HOT_LEAD"
                :
                score >= 40
                ? "WARM_LEAD"
                :
                "COLD_LEAD"

        };

    }


    createOffer(product:string, price:number) {

        return {

            product,

            price,

            status:"PENDING_APPROVAL"

        };

    }

}