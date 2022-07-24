// crar un objeto 2 usuarios con su nombre como primer y unica propiedad y dentro como valor un objeto con 5 propiedades,
// las cuales serán, email, habilidades, edad, id, puntaje

const usuarios = {
  Adal: {
    id: 1,
    email: "adal@adal.com",
    habilidades: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "NodeJS",
      "Angular",
    ],
    edad: 15,
    puntaje: 50,
  },
  Ana: {
    id: 2,
    email: "ana@ana.com",
    habilidades: ["HTML", "CSS", "JavaScript"],
    edad: 30,
    puntaje: 80,
  },
  Adrian: {
    id: 3,
    email: "adrian@adrian.com",
    habilidades: ["HTML", "CSS", "JavaScript"],
    edad: 25,
    puntaje: 20,
  },
  Melody: {
    id: 4,
    email: "melody@melody.com",
    habilidades: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "NodeJS",
      "React",
    ],
    edad: 20,
    puntaje: 90,
  },
};


// Acceder a las propiedades de objetos anidados usuarios.Melody.habilidades
const numeroHabilidadesDeMelody = usuarios.Melody.habilidades.length;
console.log(numeroHabilidadesDeMelody);

// Otra forma de acceder a las propiedades de objetos anidados
const numeroDehabilidadesDeMelody = usuarios?.Melody?.idiomas?.length;
console.log("habilidadesDeMelody", numeroDehabilidadesDeMelody);
//Marca undefined porque no tenemos la versión correcta de node 


// obtener las propiedades en array
const keys = Object.keys(usuarios);
console.log(keys);
console.log(typeof(keys));
// obtener los valores en array
const values = Object.values(usuarios);
console.log(values);
console.log(typeof(values));
// obtener propiedades y valores en un array
const entries = Object.entries(usuarios);
console.log(entries);
console.log(typeof(entries));


// Encuentra el nombre del usuario con el Stack MERN

//ESTA SECCIÓN TERMINA SIENDO INUTIL CON EL SWITCH
/*const MERN = [
  "MongoDB",
  "Express",
  "NodeJS",
  "React"
];*/

const validarHabilidades = function (habilidad) {
  switch (habilidad) {
    case "MongoDB":
      return true;
    case "Express":
      return true;
    case "NodeJS":
      return true;
    case "React":
      return true;
    default:
      return false;
      
  }
  
}


const buscar = function(elemento, index) {
  const { habilidades } = elemento; //Habilidades son las de todos los USUARIOS
  console.log(habilidades);
  const habilidadesFiltradas = habilidades.filter(validarHabilidades);
  console.log(habilidadesFiltradas);
  return habilidadesFiltradas.length === 4; // true/false
}
const index = values.findIndex(buscar) // indice o -1
console.log(index);

// nombre del usuario
if (index !== -1) {
  const nombreDelUsuario = keys[index]
  console.log("nombreDelUsuario", nombreDelUsuario)
}
