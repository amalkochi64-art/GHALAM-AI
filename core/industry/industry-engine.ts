import { IndustryRegistry } from "./industry-registry";


export class IndustryEngine {



private registry =
new IndustryRegistry();




activate(
industry:string
){


const profile =
this.registry.getIndustry(
industry
);



if(!profile){


throw new Error(
"Industry not found"
);


}



return {


industry,

agents:
profile.agents


};


}



}
