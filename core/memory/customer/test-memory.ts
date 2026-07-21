import { CustomerMemory } from "./customer-memory";


const memory = new CustomerMemory();


memory.save({

    id:"001",

    name:"مشتری تست",

    interests:[
        "صندلی مدیریتی"
    ],

    budget:"20 میلیون",

    purchaseStage:"HOT_LEAD",

    score:90,

    createdAt:new Date(),

    updatedAt:new Date()

});



console.log(
    "CUSTOMER MEMORY:"
);


console.log(
    memory.get("001")
);