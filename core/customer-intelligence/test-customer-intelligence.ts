import { CustomerMemory } from "./memory/customer-memory";


const memory = new CustomerMemory();


console.log("🧠 CUSTOMER MEMORY TEST START");


memory.save({

    id: "001",

    name: "Ali",

    phone: "09120000000",

    budget: "5000000",

    interests: [
        "office-chair",
        "management-desk"
    ],

    purchaseStage: "INTERESTED"

});


console.log(
    "SAVE:",
    memory.get("001")
);


memory.update(
    "001",
    {
        budget: "10000000",
        purchaseStage: "HOT_LEAD"
    }
);


console.log(
    "UPDATE:",
    memory.get("001")
);


console.log(
    "ALL CUSTOMERS:",
    memory.getAll()
);