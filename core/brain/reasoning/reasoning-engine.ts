import { AIContext } from "../context/ai-context";


export class ReasoningEngine {



analyze(
context:AIContext
){



let intent="unknown";

let confidence=50;



const text =
context.message;



if(
text.includes("قیمت") ||
text.includes("خرید")
){

intent="sales";

confidence=90;

}



if(
text.includes("پشتیبانی")
){

intent="support";

confidence=85;

}



return {


intent,

confidence,

context


};



}


}
