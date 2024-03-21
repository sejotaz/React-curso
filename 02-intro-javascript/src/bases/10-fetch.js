console.log("Voy hacer grande, más de lo que ya soy. ");

const ApiKey = 'Ai0BEDfVhEXQhJPgDV15khzsFl3gZbYC'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ ApiKey }`)

peticion
.then( resp => resp.json() )
.then( ({data}) => {
     const { url } = data.images.original

     const img = document.createElement('img')
     img.src = url

     document.body.append( img )
})
.catch(console.warn);