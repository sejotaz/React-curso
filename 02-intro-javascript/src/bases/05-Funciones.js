console.log("Voy hacer grande, más de lo que ya soy. ");

const saludar = function( nombre ){
    return `Hola, ${nombre}`
}


const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`
}
const saludar3 = ( nombre ) => `Hola, ${nombre}`
const saludar4 = () => `Hola Planeta`

console.log(saludar2('Sejotaz'))
console.log(saludar3('Madara'))
console.log(saludar4());

const getUser = () => 
    ({
        uid: 'ABC123',
        username: 'Kevin777'
    })


const user = getUser();
console.log(user);

// Tarea
// 1. Transformen una función flecha 
// 2. Retornar un objeto implicito 
// 3. Pruebas
const ususarioActivo = ( nombre ) =>
     ({
        uid: 'ABC546',
        username: nombre
    })
    
console.log(ususarioActivo('Kevin666'))
