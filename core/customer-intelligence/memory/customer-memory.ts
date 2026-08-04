import { CustomerProfile } from "../models/customer-profile";


export class CustomerMemory {

    private customers: CustomerProfile[] = [];


    save(customer: CustomerProfile) {

        this.customers.push(customer);

        return customer;

    }


    find(id: string) {

        return this.customers.find(
            customer => customer.id === id
        );

    }


    getAll() {

        return this.customers;

    }

}