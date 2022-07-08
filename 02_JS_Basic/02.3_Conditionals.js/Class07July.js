
// Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

//var esBellisimo = prompt('¿Eres bello? si/no')

//if (esBellisimo =='si'){
//    document.write('Ciertamente')
//} else {
//    document.write('No te creo')
//}


/*=======  Solicitar al usuario
y determinar si es divisible entre 2 o no 
Mostrando el mensaje al usuauruio X número
 es divisible entre dos=====*/

//var numero = prompt('Escribe un número del 1-1000')

// if (numero%2==0) {
//    document.write(`${numero} es divisible entre 2`)
   
// } else if (numero%2!==0){
//    document.write(`${numero}  NO es divisible entre 2`)
// }




 /*=======  Crear un programa que determine si un 
 número introducido en un promtp es
par o no, la respiesta será 
mostrada en un alert =====*/
 /*=======  If a number is evenly divisible
  by 2 with no remainder, then it is even.
   You can calculate the remainder with the modulo operator %
    like this num % 2 == 0 . If a number divided by 2 leaves a remainder of 1,
     then the number is odd. 
 You can check for this using num % 2 == 1 . =====*/

 //var esPar = prompt('Escribe un número del 1-1000')

 //if (esPar%2==0) {
 //   document.write(`${esPar} es par`)
   
// } else if (esPar%2!==1){
//    document.write(`${esPar}  es non`)
// }


 /*=======  Escribe un programa que responda aun usuario que quiere comprar un helado
 cuanto le costará en función del topping qwue eliga 
 1. Sin toping 50MX
 2. oreo 10MX
 3. kitkat 15MX
 4. brownie 20MX
 5. coco 60MX =====*/


 /*var topping = prompt('¿Qué toping quieres? oreo/kitkat/brownie/coco/nada');
 topping = topping.trim().toLowerCase()

 var precio_base = 50; */

/* if (topping ==='nada') {
    document.write(`Tu helado costará $ ${precio_base} MX `)
 } else if (topping ==='oreo') {
    precio = precio_base + 10 
    document.write(`Tu helado costará $ ${precio} MX `)
 } else if (topping ==='kitkat') {
    precio = precio_base + 15 
    document.write(`Tu helado costará $ ${precio} MX `)
} else if (topping ==='brownie') {
    precio = precio_base + 20 
    document.write(`Tu helado costará $ ${precio} MX `)
} else if (topping ==='coco') {
    precio = precio_base + 30 
    document.write(`Tu helado costará $ ${precio} MX `)
} */


/*var topping = prompt('¿Qué toping quieres? oreo/kitkat/brownie/coco/nada');
 topping = topping.trim().toLowerCase()

 var precio_base = 50;


switch(topping) {
    case 'oreo':
      precio = precio_base + 10
      break;
    case 'kikat':
      precio = precio_base + 15
      break;
    case 'brownie':
      precio = precio_base + 20
      break;
    case 'coco':
      precio = precio_base + 20
      break;
    case 'nada':
      precio = precio_base 
      break;
    
}

document.write(`Tu helado costará $ ${precio} MX `)
*/




var clima = prompt('¿Qué clima hará hoy? Soleado/Lluvioso/Nublado/Chubasco/Normal');
 clima = clima.trim().toLowerCase()

switch(clima) {
    case 'soleado':
      document.write('No olvides el bloqueador')
      break;
    case 'lluvioso':
      document.write('No olvides el paragüas')
      break;
    case 'nublado':
      document.write('Gran día para correr')
      break;
    case 'chubasco':
      document.write('Hay que llegar pronto a casa')
      break;
    default:
      document.write('¿Qué onda con el clima?')
      break;
    
}

