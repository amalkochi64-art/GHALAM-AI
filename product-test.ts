import { ProductService } from "./core/product/service/product-service";


const service =
new ProductService();



service.create({

id:"chair-001",

name:"Executive Office Chair",

category:"Office Chair",

price:15000000,

stock:10,

sales:120,

tags:[
"„œÌ—Ì Ì",
"·Êò”",
"ç—„Ì"
]

});



console.log(
service.getProducts()
);



console.log(
service.recommend()
);



console.log(
service.analyze(
service.getProducts()[0]
)
);
