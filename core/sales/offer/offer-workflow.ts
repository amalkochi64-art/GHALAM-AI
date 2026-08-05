import { ApprovalService } from "../../admin/approval/service/approval-service";
import { EventBus } from "../../events/event-bus";


export class OfferWorkflow{


constructor(
private approval=new ApprovalService(),
private events=new EventBus()
){}



createOffer(
data:any
){


const approval=this.approval.requestApproval(
"CREATE_OFFER"
);



this.events.emit(
"OFFER_WAITING_APPROVAL",
{
offer:data,
approval
}
);



return {

status:"WAITING_APPROVAL",

offer:data,

approval

};


}


}
