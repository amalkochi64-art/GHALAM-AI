import { AIOrchestrator } from "../orchestrator/ai-orchestrator";


export class AIKernel {


    private orchestrator: AIOrchestrator;


    constructor(){

        this.orchestrator = new AIOrchestrator();

        console.log(
            "🧠 GHALAM AI KERNEL INITIALIZED"
        );

    }



    run(input:any){


        return this.orchestrator.process(input);


    }



}