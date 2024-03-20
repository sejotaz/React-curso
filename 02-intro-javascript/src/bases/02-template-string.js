

const nombre = 'Alejo'
const apellido = 'Ospina'

const nombreCompleto = `Yo ${nombre} ${apellido}`;

console.log(nombreCompleto)
console.log('Voy a ser grande!')

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Es es un texto: ${getSaludo(nombre)}`)