export interface Customer{

id:string;

name:string;

phone?:string;

email?:string;

score:number;

createdAt:Date;

}



export class CustomerRepository{


private customers:Customer[]=[];



create(customer:Customer){

this.customers.push(customer);

return customer;

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
