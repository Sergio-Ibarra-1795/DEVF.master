//if(condicion) {Instrucciones lógicas}

if(isNaN(5)) {
    console.log('Si se está cumpliendo la condición');
} else {
    console.log('La condición cero es falsa, por lo tanto no se cumple');
}



//var edad = prompt('¿Qué edad tienes?'); 

// PENDIENTE validar si el varlo está vacio 
// PENDIENTE validar si el varlo es un número 

//if(edad>=18) {
//    console.log('Eres mayor de edad')

//} else {
//    console.log('No eres mayor de edad')
//}

var mesActual = 7; 
var esDiciembre = mesActual == 12; 
var esAgosto = mesActual == 8; 
var esJulio = mesActual ==7;


if(mesActual===12) {
    console.log('Diciembre')
} 
else if (mesActual===8) {
    console.log('Agosto')
}
else if (mesActual===1) {
    console.log('Enero')
}

else if (mesActual===7) {
    console.log('Julio')
}; 


