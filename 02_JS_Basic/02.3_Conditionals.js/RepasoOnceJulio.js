//formas de entrada de datos en JS
var entrada_prompt = prompt('¿Cómo te llamas?');


//formas de salida de datos  en JS
var salida_write = document.write(`Esta es una salida con document.write con tu nombre ${entrada_prompt}`);
//var salida_alert = alert(`Esta es una alerta con tu nombre ${entrada_prompt}`);


// Condicionales: If and Swithc
var number = 35; 

if (number === 35){
    document.write(`El número es ${number}`)
} else document.write(`El número no es ${number}`)


switch(number) {
    case 32:
      document.write('SI, SI ES 32')
      break;
    case 35:
      document.write('NO, no es 35')
      break;
    case 36:
      document.write('NO, no es 35')
      break;
    default:
      document.write('¿Qué onda ese número')
      break;
    
}

//Arrays 
var soyUnArray = [2,3,4,7,17,5,0.5,0,-2,-3,-1,2];
console.log(soyUnArray.length);
var soyUnArraySort = soyUnArray.sort(function(a,b){return a-b});
console.log(soyUnArraySort);
var max = Math.max(...soyUnArraySort); //Devuelve el maximo en un array
var min = Math.min(...soyUnArraySort);//Devuelve el minimo en un array
console.log(max);
console.log(min);


soyUnArraySort.push(22,30,40);// Para agregar elemento al final del array
console.log(soyUnArraySort);
soyUnArraySort[0] = -20; //Para sustituir un valor detemrinado dentro de [indice] en un array
console.log(soyUnArraySort);



