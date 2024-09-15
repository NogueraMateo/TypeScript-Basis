interface Customer {
    _id: ProductId
    _name: string
    _email: string
    _orders: Array<Order<Product>>

    addOrder( newOrder: Order<Product> ): void;
}