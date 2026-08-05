export class AnalyticsEngine{


private events:any[]=[];



track(
event:string,
data:any
){


this.events.push({

event,

data,

time:new Date()

});


}



report(){

return {

total:this.events.length,

events:this.events

};


}



}
