export class Product {
    constructor(
        private name: string,
        private price: number,
        private meansurement: UnitMeansurement,
    ) {}
}

export enum UnitMeansurement {
    UNI = 'Unit',
    KG = 'Kilo',
}
