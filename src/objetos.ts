let hero = {
    power: 2000,
    name: "IronMan"
}

function createHero(power: number, name: string) {
    return { power, name }
}

const thor = createHero(3500, "Thor")

/*
En este momento no sabemos si hero y thor son del mismo tipo aunque tengan
las mismas propiedades
*/



// Template union types
type HeroId = `${string}-${string}-${string}-${string}` // Funciona como validador

// Type Alias
type Hero = {
    readonly id?: HeroId // Para que no se pueda acceder y modificar
    name: string,
    age: number,
    power: number,
    isActive?: boolean // Propiedad opcional
}

let myHero: Hero = {
    name: "Hulk",
    age: 55,
    power: 6000
};

function createMyHero( name: string, age: number, power: number ): Hero {
    return { id: crypto.randomUUID(), name, age, power, isActive: true }
}

const deadpool = createMyHero("Deadpool", 40, 2000)
console.log(deadpool.isActive)

// Ahora si sabemos que myHero y deadpool son del mismo tipo al usar TypeAlias

// Intersection types
type UserBasic = {
    email: string,
    password: string
}

type UserExtras = {
    age?: number,
    name?: string,
    lastname?: string
    address?: {
        street1: string,
        street2: string
    }
}

// El tipo User une tanto las propiedades de UserBasic como las de UserExtras
type User = UserBasic & UserExtras


// Type Indexing
// Permite reutilizar tipos dentro de objetos
const userAddress : UserExtras["address"] = {
    street1: "Street 21",
    street2: "45Nth"
}

