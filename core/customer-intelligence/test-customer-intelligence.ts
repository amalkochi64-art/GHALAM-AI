import {CustomerMemory}
from "./memory/customer-memory";


const memory=new CustomerMemory();


memory.save({

id:"001",

name:"مشتری تست",

interests:[
"میز مدیریت"
],

budget:"30 میلیون",

purchaseStage:"HOT_LEAD",

score:90,

createdAt:new Date(),

updatedAt:new Date()

});


console.log(
memory.find("001")
);