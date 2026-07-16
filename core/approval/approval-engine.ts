export class ApprovalEngine {


    check(decision:any){


        if(decision.requiresApproval){


            return {

                approved:false,

                message:
                "Waiting for owner approval"

            };

        }



        return {

            approved:true,

            message:
            "Auto approved"

        };


    }


}