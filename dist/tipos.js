"use strict";
function saludar1(persona) {
    const { name, age } = persona;
    console.log(`Hola ${name} tienes ${age} años`);
}
function saludar2({ name, age }) {
    console.log(`Hola ${name} tienes ${age} años`);
}
saludar1({ name: "Mateo", age: 19 });
saludar2({ name: "Mateo", age: 19 });
const sayHiFromFunction = (fn) => {
    return fn("Brayan");
};
const sayHi = (name) => {
    return `Hola ${name}`;
};
console.log(sayHiFromFunction(sayHi));
const sumar = (a, b) => {
    return a + b;
};
const restar = (a, b) => {
    return a - b;
};
const personajes = ["Ema", "IronMan", "Deapool", "DrStrange"];
personajes.forEach(personaje => {
    console.log(personaje.toUpperCase());
});
//# sourceMappingURL=tipos.js.map