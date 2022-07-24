// Estructuras de control
/* if () {}

while () {}

for() {}

do {} while ()
 */


// Estrucutras de Repetición
let contador = 0;
const condicion = contador <= otraVariable;
while (condicion) {
  contador++;
}


/* FOR suele utilizarse para iterar arrays en los que por cada vuelta
se puede "hacer algo" con los array*/
const array = [];
for (let index = 0; variable <= array.length; i++) {
  const element = array[index];
  console.log(element);
}


function esLues() {
  const fecha = new Date();
  const dia = fecha.getDay();
  return dia === 1;
}
//do {} while (esLues());

//do {} while ('condition or funtion');


// Formas de declarar sintaxis de una función 
function nombreDeTuFuncion() {}; //Forma 1 

const otraFuncion = function () { //Forma 2
  return "valor";
};

// Forma 3: Azucar Sintactica ES6 Funciones flecha
const nombreFuncion = () => "valor"



// HOISTING

var miVariable = "var"

// TAREA "Coertion"