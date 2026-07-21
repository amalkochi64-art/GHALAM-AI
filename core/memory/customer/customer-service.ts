import {
    CustomerMemory,
    CustomerProfile
}
from "./customer-memory";



export class CustomerService {


    private memory:CustomerMemory;



    constructor(){

        this.memory = new CustomerMemory();

    }



    getCustomer(id:string){

        return this.memory.get(id);

    }



    saveCustomer(customer:CustomerProfile){

        return this.memory.save(customer);

    }


}