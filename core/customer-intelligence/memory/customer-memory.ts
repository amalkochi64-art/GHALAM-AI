import { CustomerProfile } from "../models/customer-profile";


export class CustomerMemory {

    private customers: CustomerProfile[] = [];


    save(customer: CustomerProfile){

        this.customers.push(customer);

        return customer;

    }



    find(id:string){

        return this.customers.find(
            customer => customer.id === id
        );

    }



    get(id:string){

        return this.find(id);

    }



    update(id:string,data:Partial<CustomerProfile>){

        const customer = this.find(id);


        if(!customer){

            return null;

        }


        Object.assign(customer,data);


        return customer;

    }



    getAll(){

        return this.customers;

    }



    clear(){

        this.customers=[];

    }


}