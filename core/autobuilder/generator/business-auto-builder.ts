import { TemplateRegistry } from "../registry/template-registry";


export class BusinessAutoBuilder {


private registry =
new TemplateRegistry();



build(
industry:string,
businessName:string
){


const template =
this.registry.get(industry);



if(!template){

throw new Error(
"Business template not found"
);

}



return {


businessName,


industry,


activated:true,


modules:
template.modules,


agents:
template.agents,


workflows:
template.workflows,


createdAt:
new Date()


};



}


}
