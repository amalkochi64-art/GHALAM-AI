import { TenantRegistry } from "./tenant/tenant-registry";
import { PluginRegistry } from "./plugins/plugin-registry";
import { AgentFactory } from "./agents/agent-factory";
import { WorkflowEngine } from "./workflow/workflow-engine";


export class PlatformCore {



tenant =
new TenantRegistry();


plugins =
new PluginRegistry();



agents =
new AgentFactory();



workflow =
new WorkflowEngine();




deploy(

tenantId:string,

name:string,

industry:string

){



const tenant = this.tenant.register({

id:tenantId,

name,

industry,

plan:"PRO",

active:true,

createdAt:new Date()

});



return {


tenant,


plugins:
this.plugins.list(),


agents:
this.agents.list(),


workflows:
this.workflow.list()


};


}



}
