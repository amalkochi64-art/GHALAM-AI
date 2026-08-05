export type Intent =
| "sales"
| "support"
| "marketing"
| "unknown";


export interface AIResponse{

action:string;

confidence:number;

data?:any;

}


