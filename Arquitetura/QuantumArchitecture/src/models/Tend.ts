import { Product } from './Product';
import { User } from './User';

export class Tend {
    private products: Array<Product> = [];

    constructor(private name: string, private local: string, private owner: User) {}

    addProduct(product: Product): void {
        this.products.push(product);
    }

    show(): string {
        return JSON.stringify([this.name, this.local, this.owner, this.products]);
    }
}
