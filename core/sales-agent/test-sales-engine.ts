import { SalesEngine } from "./sales-engine";
import { CustomerProfile } from "../customer-intelligence/models/customer-profile";


const salesEngine = new SalesEngine();



const customer: CustomerProfile = {

    id: "001",

    name: "Ali",

    phone: "09120000000",

    budget: "10000000",

    interests: [
        "صندلی مدیریتی",
        "میز مدیریت"
    ],

    purchaseStage: "HOT_LEAD"

};



console.log(
    "🔥 SALES ENGINE TEST START"
);



const result =
salesEngine.analyze(customer);



console.log(
    "CUSTOMER:",
    customer
);



console.log(
    "SALES RESULT:",
    result
);