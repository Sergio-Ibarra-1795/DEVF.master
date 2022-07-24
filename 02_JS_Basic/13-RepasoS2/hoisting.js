// Ejemplo de hoisiting en funciones
saludar('Gerardo')

function saludar(nombre) {
  console.log('Hola' + ' ' + nombre)
}

//  Ejemplo de hoisiting variables
console.log(gato);

var gato = 'Bolay';

console.log(gato);


// const y let no tienen hoisting
const perro = 'choco';
console.log(perro);


// const let scope de bloque {}
for (let index = 0; index < array.length; index++) {}

console.log(miVariable) // undefined

if (true) {
  var miVariable = 'valor';
}

console.log(miVariable) // valor


//Se está cambiando el scope global de la función por uno de  variable al asignarlo a saludar2
console.log(hola); // ReferenceError: no esta definida

const saludar2 = function () {
  var hola = "Bienvenido"
}

console.log(hola); // ReferenceError: no esta definida
