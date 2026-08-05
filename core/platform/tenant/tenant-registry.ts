import { Tenant } from "./tenant";

export class TenantRegistry {


private tenants:Tenant[]=[];



register(
tenant:Tenant
){

this.tenants.push(
tenant
);


return tenant;

}



get(
id:string
){

return this.tenants.find(
t=>t.id===id
);

}



list(){

return this.tenants;

}



}
