import { CustomerMemory } from "../memory/customer-memory";
import { CustomerProfile } from "../models/customer-profile";


export class CustomerService {


    private memory:CustomerMemory;


    constructor(){

        this.memory = new CustomerMemory();

    }



    create(profile:CustomerProfile){

        return this.memory.save(profile);

    }



    getCustomer(id:string){

        return this.memory.get(id);

    }



    updateCustomer(id:string,data:any){

        return this.memory.update(id,data);

    }


}