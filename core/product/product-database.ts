export interface Product {
    id:string;
    name:string;
    category:string;
    price:number;
    stock:number;
    features:string[];
}


export const products:Product[] = [

{
id:"chair-001",
name:"صندلی مدیریتی چرمی",
category:"office-chair",
price:8500000,
stock:12,
features:[
"پشتی بلند",
"روکش چرم",
"تنظیم ارتفاع",
"مکانیزم سینکرون"
]
},


{
id:"desk-001",
name:"میز مدیریت کلاسیک",
category:"management-desk",
price:25000000,
stock:5,
features:[
"صفحه MDF",
"طراحی لوکس",
"کشو قفل دار"
]
}

];


export function searchProduct(keyword:string){

return products.filter(product =>
product.name.includes(keyword)
||
product.category.includes(keyword)
);

}