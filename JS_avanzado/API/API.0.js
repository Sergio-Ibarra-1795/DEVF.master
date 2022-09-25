//Vamos a consumir la pokeapi (https://pokeapi.co/)
//ENDPOINT PARA HACER PETICIONES: https://pokeapi.co/api/v2/pokemon/


// 1) Traer a request 
const request = require('request');

// 2) Crear URI (QUE TIENE EL ENDPPINT)
const URI = 'https://pokeapi.co/api/v2/pokemon/'

// 2) Implementar a request (Crear una funcion que piuda el nombre y devuelva tipo)
function getPokemon (name){
   request(URI + name, function (error, response, body){
    if(response.statusCode === 200){
        const dataEnFormatoJson = JSON.parse(body)//Pasar de un objeto JSON a uno de JS
        const typePokemon = dataEnFormatoJson.types.map((objeto=>objeto.type.name))
        console.log(`El tipo de pokemon de ${name} es ${typePokemon}`)
    } else {
        console.log(`Ocurrió un error: ${response.statusCode}, ${response.statusMessage}`)
    }

   });

}

getPokemon('pikachu')
