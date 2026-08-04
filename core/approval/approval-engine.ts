export class ApprovalEngine {

    private approved = false;


    approve(){

        this.approved = true;

        return {
            approved:true,
            message:"Owner approved"
        };

    }


    reject(){

        this.approved = false;

        return {
            approved:false,
            message:"Owner rejected"
        };

    }


    check(decision:any){

        if(decision.requiresApproval && !this.approved){

            return {

                approved:false,

                message:
                "Waiting for owner approval"

            };

        }


        return {

            approved:true,

            message:
            "Approved"

        };

    }

}