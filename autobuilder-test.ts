import { ActivationEngine } from "./core/autobuilder/activation-engine";


const engine =
new ActivationEngine();



console.log(

engine.activate(

"GHALAM_FURNITURE_001",

"مبلمان قلم"

)

);



console.log(

engine.activate(

"GHALAM_RESTAURANT_001",

"رستوران نمونه"

)

);
