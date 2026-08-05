export interface Offer{


id:string;

customerId:string;

products:string[];

amount:number;

status:string;


}


export class OfferEngine{


create(
offer:Offer
){


return {

...offer,

status:"PENDING_APPROVAL"


};


}


}
