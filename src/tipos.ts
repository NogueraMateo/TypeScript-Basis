/**
 * Tipamos un objeto de una manera
 * @param persona 
 */
function saludar1( persona: {name: string, age: number}) {
    const { name, age } = persona
    console.log(`Hola ${name} tienes ${age} años`)
}

/**
 * Tipamos un objeto de otra manera
 * @param param0 
 */
function saludar2( { name, age }: { name: string, age: number }) {
    console.log(`Hola ${name} tienes ${age} años`)
}

saludar1({ name: "Mateo", age: 19 })
saludar2({ name: "Mateo", age: 19 })


// Funciones flecha

/**
 * Funcion flecha que recibe una función como parámetro
 * La función como parámetro recibe un argumento de tipo string y retorna un string
 * @param fn 
 */
const sayHiFromFunction = (fn: (name: string)  => string )=> {
    return fn("Brayan")
}

/**
 * Simple función flecha
 * @param name 
 * @returns 
 */
const sayHi = (name: string): string => {
    return `Hola ${name}`
}

console.log(sayHiFromFunction(sayHi))

// Tipar arrow functions
// Forma 1 
const sumar = (a: number, b: number): number => {
    return a + b
}

// Forma 2
const restar: (a: number, b: number) => number = ( a, b) => {
    return a - b
}


// Inferencia de tipos en funciones anónimas según el contexto
const personajes = ["Ema", "IronMan", "Deapool", "DrStrange"]

// Infiere que personaje es un string
personajes.forEach( personaje => {
    console.log(personaje.toUpperCase())
})

