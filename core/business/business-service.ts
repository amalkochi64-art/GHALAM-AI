import { TenantManager } from "./tenant-manager";
import { IndustryEngine } from "../industry/industry-engine";


export class BusinessService {



private tenants =
new TenantManager();



private industry =
new IndustryEngine();




register(

id:string,

name:string,

industry:string

){



const aiProfile =
this.industry.activate(
industry
);



return this.tenants.createBusiness({


id,

name,

industry,

description:
aiProfile.industry,


activeModules:
aiProfile.agents


});


}



}
