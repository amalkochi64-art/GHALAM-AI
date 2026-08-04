export type ApprovalStatus =
    | "PENDING"
    | "APPROVED"
    | "REJECTED";


export interface ApprovalRequest {

    id:string;

    action:string;

    status:ApprovalStatus;

    createdAt:string;

}



export class ApprovalService {


    private requests:ApprovalRequest[] = [];



    create(action:string){


        const request:ApprovalRequest = {

            id:Date.now().toString(),

            action,

            status:"PENDING",

            createdAt:new Date().toISOString()

        };


        this.requests.push(request);


        return request;

    }



    approve(id:string){


        const request = this.requests.find(
            item => item.id === id
        );


        if(!request){

            return null;

        }


        request.status="APPROVED";


        return request;

    }



    reject(id:string){


        const request = this.requests.find(
            item => item.id === id
        );


        if(!request){

            return null;

        }


        request.status="REJECTED";


        return request;

    }



    getAll(){

        return this.requests;

    }


}