"use strict";
class Product {
    constructor(id, name, price, category) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._category = category;
    }
    getId() {
        return this._id;
    }
    getName() {
        return this._name;
    }
    getPrice() {
        return this._price;
    }
    getCategory() {
        return this._category;
    }
    applyDiscount(percentage) {
        let toDiscount = (this._price * percentage) / 100;
        this._price -= toDiscount;
        console.log(`The new price is ${this._price}`);
    }
}
//# sourceMappingURL=product.js.map