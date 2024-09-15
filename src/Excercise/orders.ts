class Order<T> {
    
    constructor(
        public orderId: ProductId,
        public customer: Customer,
        public products: Array<T>
    ) {}

    calculateTotal(): number {
        let total = 0
        
        this.products.forEach( (product: any) => {
            total += product.getPrice()
        })

        return total
    }
}