export class CustomerScoreEngine{


calculate(data:any){


let score=0;


if(data.interest)
score+=30;


if(data.purchase)
score+=40;


if(data.contact)
score+=20;


return score;


}


}
