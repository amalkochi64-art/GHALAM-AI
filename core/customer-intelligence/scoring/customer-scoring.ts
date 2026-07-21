import { CustomerProfile } from "../models/customer-profile";


export class CustomerScoring {


calculate(customer:CustomerProfile){

let score=0;


if(customer.interests.length>0)
score+=30;


if(customer.budget)
score+=30;


if(customer.purchaseStage==="INTERESTED")
score+=20;


if(customer.purchaseStage==="HOT_LEAD")
score+=40;


return Math.min(score,100);

}

}