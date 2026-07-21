export interface CustomerProfile {

    id: string;

    name: string;

    interests: string[];

    budget?: string;

    purchaseStage:
    | "NEW"
    | "INTERESTED"
    | "HOT_LEAD"
    | "CUSTOMER";

    score: number;

    createdAt: Date;

    updatedAt: Date;

}



export class CustomerMemory {


    private customers: CustomerProfile[] = [];



    save(customer: CustomerProfile) {

        const index =
        this.customers.findIndex(
            c => c.id === customer.id
        );


        if(index >= 0){

            this.customers[index] = {
                ...customer,
                updatedAt:new Date()
            };

        }
        else{

            this.customers.push(customer);

        }


        return customer;

    }




    get(id:string){

        return this.customers.find(
            c=>c.id===id
        );

    }




    getAll(){

        return this.customers;

    }


}