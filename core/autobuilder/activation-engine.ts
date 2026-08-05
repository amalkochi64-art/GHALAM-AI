import { BusinessAutoBuilder } from "./generator/business-auto-builder";


export class ActivationEngine {



private builder =
new BusinessAutoBuilder();



activate(
key:string,
businessName:string
){


const map:any={


GHALAM_FURNITURE_001:
"furniture",


GHALAM_RESTAURANT_001:
"restaurant",


GHALAM_CLINIC_001:
"clinic"


};



const industry =
map[key];



if(!industry){

throw new Error(
"Invalid activation key"
);

}



return this.builder.build(
industry,
businessName
);



}



}
