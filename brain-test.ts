import { AIBrain } from "./core/brain/ai-brain";


const brain =
new AIBrain();



console.log(

brain.process(

"GHALAM-001",

"customer-001",

"قیمت میز مدیریت لوکس چنده؟"

)

);



console.log(

brain.process(

"GHALAM-001",

"customer-001",

"مشکل سفارش دارم"

)

);
