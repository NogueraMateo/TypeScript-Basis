"use strict";
class Order {
    constructor(orderId, customer, products) {
        this.orderId = orderId;
        this.customer = customer;
        this.products = products;
    }
    calculateTotal() {
        let total = 0;
        this.products.forEach((product) => {
            total += product.getPrice();
        });
        return total;
    }
}
//# sourceMappingURL=orders.js.map