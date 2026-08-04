export class ApprovalService {


    private approvals:any[] = [];


    create(request:any){

        const approval = {

            id: Date.now(),

            request,

            status:"PENDING",

            createdAt:new Date()

        };


        this.approvals.push(approval);


        return approval;

    }



    approve(id:number){

        const item = this.approvals.find(
            x=>x.id===id
        );


        if(!item){

            return {
                success:false,
                message:"Approval not found"
            };

        }


        item.status="APPROVED";


        return {

            success:true,

            approval:item

        };

    }




    reject(id:number){

        const item=this.approvals.find(
            x=>x.id===id
        );


        if(!item){

            return {
                success:false
            };

        }


        item.status="REJECTED";


        return {

            success:true,

            approval:item

        };

    }



    list(){

        return this.approvals;

    }


}