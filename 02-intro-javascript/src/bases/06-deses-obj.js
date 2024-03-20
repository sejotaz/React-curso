console.log("Voy hacer grande, más de lo que ya soy. ");

const persona = {
    nombre: 'Mc revolver',
    edad: 9,
    clave: '9mm'
}

// const { nombre, edad, clave } = persona;

// console.log(nombre)
// console.log(edad)
// console.log(clave)

const UseContext = ({ clave, nombre, edad, range= 'Yarl' }) => {
    // console.log(nombre, edad, range)

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.789,
            lng: -12.741
        }
    }
}
// const avenger = UseContext(persona);
// const { nombreClave, anios } = avenger

const {nombreClave, anios, latlng: {lat, lng}} = UseContext(persona)

console.log(nombreClave, anios)
console.log(lat, lng)