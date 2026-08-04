export interface CustomerProfile {

    id: string;

    name: string;

    phone?: string;

    email?: string;

    budget?: string;

    interests: string[];

    purchaseStage:
        | "NEW"
        | "INTERESTED"
        | "HOT_LEAD"
        | "CUSTOMER";

    createdAt?: Date;

}