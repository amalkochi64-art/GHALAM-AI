import { GhalamRuntime } from "./core/runtime/ghalam-runtime";


const runtime =
new GhalamRuntime();



console.log(

runtime.start(

"GHALAM_FURNITURE_001",

"مبلمان قلم",

"tenant-001"

)

);



console.log(

runtime.message(

"tenant-001",

"customer-001",

"قیمت میز مدیریت چنده؟"

)

);
