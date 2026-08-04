export class InventoryEngine {

    check(product:any){

        return {
            productId: product.id,
            stock: product.stock ?? 0,
            available: (product.stock ?? 0) > 0
        };

    }

}