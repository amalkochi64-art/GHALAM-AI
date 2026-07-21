export interface CustomerMemory {
    id: string;
    name?: string;
    phone?: string;
    interests: string[];
    budget?: string;
    lastMessage?: string;
    purchaseStage:
        | "NEW"
        | "INTERESTED"
        | "HOT_LEAD"
        | "CUSTOMER";

    score: number;

    createdAt: Date;
    updatedAt: Date;
}


export class CustomerMemoryStore {

    private customers: Map<string, CustomerMemory> = new Map();


    save(customer: CustomerMemory) {

        customer.updatedAt = new Date();

        this.customers.set(
            customer.id,
            customer
        );

        return customer;
    }


    get(id:string){

        return this.customers.get(id);

    }


    update(
        id:string,
        data:Partial<CustomerMemory>
    ){

        const customer = this.customers.get(id);


        if(!customer){

            throw new Error(
                "Customer not found"
            );

        }


        const updated={
            ...customer,
            ...data,
            updatedAt:new Date()
        };


        this.customers.set(
            id,
            updated
        );


        return updated;

    }


    getAll(){

        return Array.from(
            this.customers.values()
        );

    }

}