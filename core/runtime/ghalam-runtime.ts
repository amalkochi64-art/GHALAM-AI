import { ActivationEngine } from "../autobuilder/activation-engine";
import { PlatformCore } from "../platform/platform-core";
import { AIBrain } from "../brain/ai-brain";


export class GhalamRuntime {


private activation =
new ActivationEngine();


private platform =
new PlatformCore();


private brain =
new AIBrain();



start(
key:string,
businessName:string,
tenantId:string
){


const business =
this.activation.activate(
key,
businessName
);



const platform =
this.platform.deploy(
tenantId,
businessName,
business.industry
);



return {

business,

platform,

brain:"CONNECTED",

status:"ONLINE"

};


}



message(
tenantId:string,
userId:string,
text:string
){

return this.brain.process(
tenantId,
userId,
text
);


}


}
