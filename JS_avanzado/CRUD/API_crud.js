//Aqui vamos a ejecutar la lógica 
const goodReadsCrud = require ('./logica')

//* LISTAR A TODOS LOS AUTORES 
//goodReadsCrud.listAuthors()


//* VER A CADA AUTHOR POR SEPARADO
//goodReadsCrud.getAuthor(14892)



//* CREAR UN AUTOR

const jsonsend = {

    name: "Chikito22",
    last_name: "Peralta",
    nacionalidad: "MX",
    biography: "Corazao",
    gender: "F",
    age: 28,
    is_alive: true
}


goodReadsCrud.createAuthor(jsonsend)
