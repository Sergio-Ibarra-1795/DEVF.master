//Vamos a tener nuestra lógica (peticiones)
//*DOCUMENTACIÓN
//*URI DE LA API: https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/

//1)Treaer a request que acabamos de instalar 
const request = require('request')

//? 2) TENER NUESTRO ENDPOINT 
const URI = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'

//3 LISTAR A TODOS LOS AUTORES (authors)
const listAuthors = ( ) => {
    request.get(URI,(error,response,body)=>{
        //validamos nuestra petición
        if(response.statusCode === 200){
            const authors = JSON.parse(body)
            console.log(authors)
        }else{
            console.log(response.statusCode , response.statusMessage)
        }                 //! 404                  Not Found
    })
}


//3 LISTAR A UN AUTOR POR SU ID 
const getAuthor = (id)=>{
    request.get(URI+id+'/',(error,response,body)=>{
        //validamos nuestra petición 
        if(response.statusCode === 200){
            //Se convierte a un objeto de Javascript 
            const author = JSON.parse(body)
            console.log(author)
        }else{
            console.log('ID NO VALIDO', response.statusCode , response.statusMessage)
        }  
    })
}


//Creamos un author en la API. Para ello cremos un JSON con la info del author 

const createAuthor = (jsonData) =>{
    const objectConfig = {
        url:URI, //Endpoint para crear el autor 
        form: jsonData //Esta es la data del autor al crear 
    }

    request.post(objectConfig,(error,response,body)=>{
        if(response.statusCode === 201){
            const createauthor = JSON.parse(body)
            console.log("AUTOR CREADO EXITOSAMENTE: " + "\n", createauthor)
        }else{
            console.log("Autor NO creado exitosamente", response.statusCode , response.statusMessage)
        }  
    })

}


//Updating an existing-author (partial_update)
const patchAuthor = (id,jsonData) =>{
    const objectConfig = {
        url:URI + id +'/', //Endpoint para update el autor 
        form: jsonData //Esta es la data del autor al crear 
    }

    request.patch(objectConfig,(error,response,body)=>{
        if(response.statusCode === 200){
            const patchauthor = JSON.parse(body)
            console.log("AUTOR UPDATED EXITOSAMENTE: " + "\n", patchauthor)
        }else{
            console.log("Autor NO UPDATED exitosamente", response.statusCode , response.statusMessage)
        }  
    })

}





  module.exports = {
    listAuthors,
    getAuthor,
    createAuthor,
    patchAuthor,
  } 