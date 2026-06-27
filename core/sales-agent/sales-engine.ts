export interface Customer {
  id: string;
  name: string;
  phone: string;
  score: number;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  stock: number;
}

export class SalesEngine {

  constructor() {
    console.log("✅ GHALAM Sales Engine Initialized");
  }

  public suggestProduct(
    customer: Customer,
    products: Product[]
  ): Product | null {

    const availableProducts = products.filter(p => p.stock > 0);

    if (availableProducts.length === 0) {
      return null;
    }

    availableProducts.sort((a, b) => b.price - a.price);

    return availableProducts[0];
  }

  public calculateDiscount(customer: Customer): number {

    if (customer.score >= 95) return 20;

    if (customer.score >= 80) return 15;

    if (customer.score >= 60) return 10;

    return 0;
  }
}