import { SalesEngine } from "../sales/engine/sales-engine";
import { OfferEngine } from "../sales/offer/offer-engine";
import { KnowledgeEngine } from "../knowledge/knowledge-engine";
import { ApprovalEngine } from "../admin/approval/approval-engine";
import { EventBus } from "../events/event-bus";


export class ServiceContainer{


sales=new SalesEngine();

offer=new OfferEngine();

knowledge=new KnowledgeEngine();

approval=new ApprovalEngine();

events=new EventBus();


}
