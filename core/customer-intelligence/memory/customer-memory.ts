export interface CustomerProfile {
    id: string;
    name?: string;
    interests: string[];
    budget?: string;
    purchaseStage?: string;
    score?: number;
    createdAt: Date;
    updatedAt: Date;
}


export class CustomerMemory {

    private customers = new Map<string, CustomerProfile>();


    save(customer: CustomerProfile) {

        this.customers.set(customer.id, {
            ...customer,
            updatedAt: new Date()
        });

        return customer;
    }


    get(id:string){

        return this.customers.get(id);

    }


    find(id:string){

        return this.customers.get(id);

    }


    update(id:string,data:Partial<CustomerProfile>){

        const customer=this.customers.get(id);


        if(!customer){
            return undefined;
        }


        const updated={
            ...customer,
            ...data,
            updatedAt:new Date()
        };


        this.customers.set(id,updated);


        return updated;

    }


    all(){

        return Array.from(this.customers.values());

    }

}