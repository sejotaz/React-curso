import { heroes } from "../data/heroes"



export const getHeroeByID = (id) => heroes.find((heroe) => heroe.id === id)


// console.log(getHeroeByID(5))

export const getHeroesOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)

// console.log(getHeroesOwner('DC'))

// console.log("Voy hacer grande, más de lo que ya soy. ");


