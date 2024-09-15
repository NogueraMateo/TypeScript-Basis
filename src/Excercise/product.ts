type ProductId = `${string}-${string}-${string}-${string}`


class Product {
    
    _id: ProductId
    _name: string
    _price: number
    _category: string

    constructor( id: ProductId, name: string, price: number, category: string) {
        this._id = id
        this._name = name
        this._price = price
        this._category = category
    }

    getId(): ProductId {
        return this._id
    }

    getName(): string {
        return this._name
    }

    getPrice(): number {
        return this._price
    }

    getCategory(): string {
        return this._category
    }

    applyDiscount(percentage: number): void {
        let toDiscount = (this._price * percentage) / 100
        this._price -= toDiscount
        console.log(`The new price is ${this._price}`)
    }
}