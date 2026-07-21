export interface CustomerProfile {

    id:string;

    name:string;

    interests:string[];

    budget?:string;

    purchaseStage:
        | "NEW"
        | "INTERESTED"
        | "HOT_LEAD"
        | "CUSTOMER";

    score:number;

    createdAt:Date;

    updatedAt:Date;
}