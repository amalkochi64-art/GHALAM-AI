import {SalesEngine} from "../../sales/engine/sales-engine";
import {OfferWorkflow} from "../../sales/offer/offer-workflow";
import {ApprovalService} from "../../admin/approval/service/approval-service";
import {EventBus} from "../../events/event-bus";
import {CustomerProfileService} from "../../customer/profile/customer-profile-service";
import {AnalyticsEngine} from "../../analytics/analytics-engine";
import {SecurityService} from "../../security/security-service";


export class ApplicationContainer{


sales:SalesEngine;
approval:ApprovalService;
offerWorkflow:OfferWorkflow;
events:EventBus;
customer:CustomerProfileService;
analytics:AnalyticsEngine;
security:SecurityService;


constructor(){


this.events = new EventBus();

this.approval = new ApprovalService();


this.offerWorkflow = new OfferWorkflow(
this.approval,
this.events
);


this.sales = new SalesEngine();


this.customer = new CustomerProfileService();


this.analytics = new AnalyticsEngine();


this.security = new SecurityService();


}


}
