export class SalesEngine{


process(intent:string){


switch(intent){


case "sales":

return {

stage:"LEAD",

action:"CREATE_OFFER"

};


case "support":

return {

stage:"SUPPORT",

action:"CREATE_TICKET"

};


default:

return {

stage:"GENERAL",

action:"ANSWER"

};


}



}


}
