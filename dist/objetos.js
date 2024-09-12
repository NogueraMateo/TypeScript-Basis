"use strict";
let hero = {
    power: 2000,
    name: "IronMan"
};
function createHero(power, name) {
    return { power, name };
}
const thor = createHero(3500, "Thor");
let myHero = {
    name: "Hulk",
    age: 55,
    power: 6000
};
function createMyHero(name, age, power) {
    return { name, age, power, isActive: true };
}
const deadpool = createMyHero("Deadpool", 40, 2000);
console.log(deadpool.isActive);
//# sourceMappingURL=objetos.js.map