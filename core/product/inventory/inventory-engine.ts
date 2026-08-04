import { Product } from "../models/product-model";


export class InventoryEngine {


checkStock(product:Product){


return {

productId:product.id,

name:product.name,

stock:product.stock,

available:product.stock > 0

};


}


isAvailable(product:Product):boolean{

return product.stock > 0;

}


}
