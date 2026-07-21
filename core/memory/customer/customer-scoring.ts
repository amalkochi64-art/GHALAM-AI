import { CustomerMemory } from "./customer-memory";


export class CustomerScoring {


    calculate(customer:CustomerMemory){


        let score=0;


        if(customer.interests.length>0)
            score+=30;


        if(customer.budget)
            score+=20;


        if(
            customer.purchaseStage==="INTERESTED"
        )
            score+=25;


        if(
            customer.purchaseStage==="HOT_LEAD"
        )
            score+=40;



        return Math.min(
            score,
            100
        );

    }


    classify(score:number){


        if(score>=80)
            return "HOT";


        if(score>=50)
            return "WARM";


        return "COLD";

    }

}