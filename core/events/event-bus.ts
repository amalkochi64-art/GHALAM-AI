export class EventBus{


private events:any[]=[];


emit(
name:string,
payload:any
){


this.events.push({

name,

payload,

time:new Date()

});


}



list(){

return this.events;

}


}
