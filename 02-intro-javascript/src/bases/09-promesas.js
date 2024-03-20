import { getHeroeByID } from "./bases/08-imp-exp";

console.log("Voy hacer grande, más de lo que ya soy. ");

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeByID(2);
//     // resolve(heroe);
//     reject("No se pudo encontrar al héroe");
//   }, 2000);
// });

// promesa.then((heroe) => {
//   console.log("heroe", heroe);
// })
// .catch(err => console.warn(err))

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeByID(id);
        if(heroe)resolve(heroe)
        else reject("No se pudo encontrar al héroe")
    }, 2000);
  });
};



getHeroeByIdAsync(1)
  .then(console.log)
  .catch(console.warn );
  

  