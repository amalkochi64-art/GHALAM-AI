import { searchProduct } from "../../../core/product/product-database";


export class SalesExecutor {


async execute(input:any){


const products = searchProduct(input.message);



return {


agent:"sales-agent",

status:"EXECUTED",

action:"START_SALES_FLOW",

customer:input,

products,


message:

products.length > 0

?

`
سلام 🌟

محصول مورد نظر شما پیدا شد:

${products[0].name}


💰 قیمت:
${products[0].price.toLocaleString()} تومان


ویژگی‌ها:

${products[0].features
.map((f:string)=>"✅ "+f)
.join("\n")}


موجودی:
${products[0].stock} عدد


آیا عکس محصول یا اطلاعات بیشتر ارسال کنم؟
`

:

"محصول مورد نظر موجود نیست.",


timestamp:new Date()

};


}


}