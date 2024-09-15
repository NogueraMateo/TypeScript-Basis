"use strict";
const inventory = {
    p1: 20,
    p2: 0,
    p3: 5
};
function checkInventory(productId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const quantity = inventory[productId];
            if (quantity > 0) {
                resolve(quantity);
            }
            else {
                reject(`Product not found or non-existent ${productId}`);
            }
        }, 1000);
    });
}
checkInventory('p1').then((stock) => {
    console.log(`Cantidad disponible: ${stock}`);
}).catch((error) => {
    console.error(`Error: ${error}`);
});
checkInventory('p2').then((stock) => {
    console.log(`Cantidad disponible: ${stock}`);
}).catch((error) => {
    console.error(`Error: ${error}`);
});
checkInventory('p4').then((stock) => {
    console.log(`Cantidad disponible: ${stock}`);
}).catch((error) => {
    console.error(`Error: ${error}`);
});
//# sourceMappingURL=promises.js.map