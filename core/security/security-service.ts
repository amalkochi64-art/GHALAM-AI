export class SecurityService{


checkPermission(

role:string,

action:string

){


if(role==="admin")

return true;



if(
action==="CREATE_OFFER"
)

return false;



return true;


}


}
