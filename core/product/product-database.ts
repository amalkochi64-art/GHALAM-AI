export interface Product {
    id:string;
    name:string;
    category:string;
    price:number;
    stock:number;
    colors:string[];
    warranty:string;
}


export const products:Product[] = [

{
    id:"chair-001",
    name:"صندلی مدیریتی چرمی",
    category:"office-chair",
    price:8500000,
    stock:12,
    colors:[
        "مشکی",
        "قهوه ای"
    ],
    warranty:"36 ماه"
},


{
    id:"desk-001",
    name:"میز مدیریت کلاسیک",
    category:"management-desk",
    price:25000000,
    stock:5,
    colors:[
        "گردویی"
    ],
    warranty:"24 ماه"
}

];