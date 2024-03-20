console.log("Voy hacer grande, más de lo que ya soy, ");

const persona = {
  nombre: "Travis",
  apellido: "Kelce",
  edad: 34,
  direccion: {
    ciudad: 'New York',
    zip: 555,
    lat: 14.58,
    lng: 34.5847584,

  }
};

console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'Mac'

console.log(persona2)