import {CustomerProfile} from "./customer-profile";


export class CustomerProfileService{


private customers:CustomerProfile[]=[];


create(profile:CustomerProfile){

this.customers.push(profile);

return profile;

}


find(id:string){

return this.customers.find(
c=>c.id===id
);

}


list(){

return this.customers;

}


}
