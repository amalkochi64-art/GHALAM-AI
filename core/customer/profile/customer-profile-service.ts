import {CustomerRepository} from "../../database/repository/customer-repository";


export class CustomerProfileService{


constructor(
private repo=new CustomerRepository()
){}



createProfile(data:any){


return this.repo.create({

...data,

score:0,

createdAt:new Date()

});


}



getProfile(id:string){

return this.repo.find(id);

}


}
