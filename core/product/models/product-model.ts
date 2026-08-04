export interface Product {

    id: string;

    name: string;

    category: string;

    brand?: string;

    description: string;

    price: number;

    stock: number;

    features: string[];

    tags: string[];

    status: "ACTIVE" | "INACTIVE";

}