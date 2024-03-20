console.log("Voy hacer grande, más de lo que ya soy. ");

const personajes = ['Kakashi', 'Itachi', 'Lee'];

const [ , ,p3] = personajes

console.log(p3)

const retornaArreglo= () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
// 1. El primer valor de arr se llamará nombre
// 2. Se llamará setNombre 
const usestate = ( valor ) =>{
    return [valor, ()=>{console.log('Hola Alejo')}]
}

const [nombre, setNombre] = usestate('Shikamaru')

console.log(nombre)
setNombre()


