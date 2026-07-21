import { CustomerProfile } from "../models/customer-profile";


export class CustomerMemory {

private customers:Map<string,CustomerProfile>
=new Map();



save(customer:CustomerProfile){

this.customers.set(
customer.id,
customer
);

return customer;

}



find(id:string){

return this.customers.get(id);

}



update(
id:string,
data:Partial<CustomerProfile>
){

const old=this.customers.get(id);

if(!old)
return undefined;


const updated={
...old,
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

}private customers = new Map<string, any>();


save(customer:any){

    this.customers.set(
        customer.id,
        customer
    );

    return customer;
}


get(id:string){

    return this.customers.get(id);
}


update(id:string,data:any){

    const old = this.customers.get(id);

    if(!old){
        return null;
    }


    const updated = {
        ...old,
        ...data,
        updatedAt:new Date()
    };


    this.customers.set(id,updated);

    return updated;
}


all(){

    return Array.from(
        this.customers.values()
    );
}