var message: string = "Hola Mundo";
message = "Hola TypeScript";

console.log(message);

message = "Adiós"

console.log(typeof []);

// Variables 

var myString = "Cadena de texto"

console.log(myString)

// Variable tipada
let myString2: String = "Esto es otra cadena"
console.log(typeof myString2)

let myNumber: number = 2
myNumber = myNumber + 4
console.log(myNumber)
console.log(typeof myNumber)

console.log(myString + " " + myNumber)

let myBoolean: boolean = false
console.log(myBoolean)
console.log(typeof myBoolean)


// Constantes 
const myConst = "Variable constante"
// myConst = "nuevo valor" Error


// Controles de flujo
if (myNumber == 10) {
    console.log("El valor es 10")

} else if (myNumber == 6) {
    console.log("El valor es 6")
} else {
    console.log("El valor no es 10")
}

// Funciones
function myFunction() {
    console.log("Mi función que no retorna nada")
}

myFunction()

// Especifico el tipo de dato de retorno aunque el compilador lo puede inferir
function stringFunction(): string {
    return "Funcion que retorna un string"
}

console.log(stringFunction())

// Tipando los parámetros de la función
function sumTwoNumbers(a: number, b: number) {
    return a + b
}

console.log(sumTwoNumbers(10, 2500))

// Listas
let myList: Array<string> = ["Arroz",  "agua", "fresa", "mango"]
console.log("Mi lista es " + myList)

// Sets
let mySet : Set<string> = new Set(["Arroz",  "agua", "fresa", "mango", "mango"])
mySet.add("lentejas")
console.log(mySet)

// Maps
let myMap: Map<string, number> = new Map([["Arroz", 2500]])
myMap.set("Lentejas", 4500)

console.log(myMap)
console.log(myMap.get("Arroz"))

// Bucles
for (const value of myList) {
    console.log(value)
} 

let myCounter = 0
while (myCounter < myList.length) {
    console.log(myList[myCounter])
    myCounter++
}

// Clases

class MyClass {
    name: string
    age: number

    constructor( name: string, age: number ) {
        this.name = name
        this.age = age
    }
}

let myClass = new MyClass("Mateo", 19)
console.log(myClass.name)
console.log(myClass.age)