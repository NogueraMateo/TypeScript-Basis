"use strict";
var message = "Hola Mundo";
message = "Hola TypeScript";
console.log(message);
message = "Adiós";
console.log(typeof []);
var myString = "Cadena de texto";
console.log(myString);
let myString2 = "Esto es otra cadena";
console.log(typeof myString2);
let myNumber = 2;
myNumber = myNumber + 4;
console.log(myNumber);
console.log(typeof myNumber);
console.log(myString + " " + myNumber);
let myBoolean = false;
console.log(myBoolean);
console.log(typeof myBoolean);
const myConst = "Variable constante";
if (myNumber == 10) {
    console.log("El valor es 10");
}
else if (myNumber == 6) {
    console.log("El valor es 6");
}
else {
    console.log("El valor no es 10");
}
function myFunction() {
    console.log("Mi función que no retorna nada");
}
myFunction();
function stringFunction() {
    return "Funcion que retorna un string";
}
console.log(stringFunction());
function sumTwoNumbers(a, b) {
    return a + b;
}
console.log(sumTwoNumbers(10, 2500));
let myList = ["Arroz", "agua", "fresa", "mango"];
console.log("Mi lista es " + myList);
let mySet = new Set(["Arroz", "agua", "fresa", "mango", "mango"]);
mySet.add("lentejas");
console.log(mySet);
let myMap = new Map([["Arroz", 2500]]);
myMap.set("Lentejas", 4500);
console.log(myMap);
console.log(myMap.get("Arroz"));
for (const value of myList) {
    console.log(value);
}
let myCounter = 0;
while (myCounter < myList.length) {
    console.log(myList[myCounter]);
    myCounter++;
}
class MyClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let myClass = new MyClass("Mateo", 19);
console.log(myClass.name);
console.log(myClass.age);
//# sourceMappingURL=index.js.map