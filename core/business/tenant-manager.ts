import { BusinessProfile } from "./business-profile";


export class TenantManager {


private businesses:
BusinessProfile[] = [];



createBusiness(
profile:BusinessProfile
){


this.businesses.push(
profile
);


return profile;


}



getBusiness(
id:string
){


return this.businesses.find(
b=>b.id===id
);


}



listBusinesses(){


return this.businesses;


}


}
