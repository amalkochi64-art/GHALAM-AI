export class IndustryRegistry {



private industries:any = {



furniture:{


name:"Furniture",

agents:[
"sales-agent",
"customer-agent"
]


},



restaurant:{


name:"Restaurant",

agents:[
"reservation-agent",
"customer-agent"
]


},



realestate:{


name:"Real Estate",

agents:[
"property-agent",
"sales-agent"
]


},



clinic:{


name:"Clinic",

agents:[
"appointment-agent",
"support-agent"
]


}


};




getIndustry(
name:string
){


return this.industries[name];


}



list(){


return Object.keys(
this.industries
);


}


}
