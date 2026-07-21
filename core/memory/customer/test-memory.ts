import {
CustomerMemoryStore
} from "./customer-memory";


import {
CustomerScoring
} from "./customer-scoring";



const memory =
new CustomerMemoryStore();



const scoring =
new CustomerScoring();



const customer =
memory.save({

id:"001",

name:"مشتری تست",

interests:[
"صندلی مدیریتی"
],

budget:
"20 میلیون",

purchaseStage:
"HOT_LEAD",

score:0,

createdAt:new Date(),

updatedAt:new Date()

});



customer.score =
scoring.calculate(customer);



console.log(
"CUSTOMER MEMORY:"
);


console.log(customer);



console.log(
"LEVEL:",
scoring.classify(customer.score)
);