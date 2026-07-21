import {
CustomerMemoryStore,
CustomerMemory
} from "./customer-memory";


import {
CustomerScoring
} from "./customer-scoring";



export class CustomerMemoryService {


private memory =
new CustomerMemoryStore();


private scoring =
new CustomerScoring();



process(
userId:string,
message:string
){


let customer =
this.memory.get(userId);



if(!customer){


customer =
this.memory.save({

id:userId,

interests:
[],

lastMessage:
message,

purchaseStage:
"NEW",

score:0,

createdAt:
new Date(),

updatedAt:
new Date()

});


}



customer.lastMessage =
message;



if(message.includes("میز")){

customer.interests.push(
"میز مدیریت"
);

}



if(message.includes("صندلی")){

customer.interests.push(
"صندلی اداری"
);

}



customer.score =
this.scoring.calculate(customer);



if(customer.score>=70){

customer.purchaseStage=
"HOT_LEAD";

}



return this.memory.save(customer);


}



getAll(){

return this.memory.getAll();

}


}