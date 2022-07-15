//Diseñar un algoritmo que permita aplicar un descuento en el supermercad
//de tal forma que se visualice el producto con el precio original y con el descuento. 


//Se inicializa objeto donde vivirán los productos y sus precios base
let productos_precio_base = {
    refrigerador:500,
    horno:150,
    lavadora:400,
    TV:450, 
}

//Se crea variable para lmacenar los productos y susd precios en un array [[Objeto1,precio1][Objeto2, precio2]]
let productos_con_precios_base = Object.entries(productos_precio_base);
let productos = Object.keys(productos_precio_base);//Forma un array con los keys del diccionario en cuestion
let precios_base = Object.values(productos_precio_base);//Forma un array con los values del diccionario en cuestion

console.log(productos_con_precios_base);//Solo para verificar que se esté formando el array, a partir del objeto

//Imprime los precios base de cada producto 
document.write(`Precio base de productos (sin descuento):<br> <bold>`);
document.write(`El precio base del  ${productos[0]} es: $${precios_base[0]}<br>`);
document.write(`El precio base del  ${productos[1]} es: $${precios_base[1]}<br>`);
document.write(`El precio base del  ${productos[2]} es: $${precios_base[2]}<br>`);
document.write(`El precio base del  ${productos[3]} es: $${precios_base[3]}<br>`);

//
document.write(`<br>`);
document.write('Durante este mes toda la tienda tiene descuentro del 15%: <br>');
document.write(`<br>`);
document.write(productos_precio_base.refrigerador);
document.write(`<br>`);


const userChoiceDisplay = document.getElementById('user-choice');
const possibleChoices = document.querySelectorAll('button');
let userChoice;

//Para asignar la elección del usuario cuando preciona el boton a la variable UserChoiseDisplay 
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id //Asigna a variable userChoise. el boton que presionó 
  userChoiceDisplay.innerHTML = userChoice //Asigna internamente el resultado del click del usuario a la variable UserChoice
}))



/*
let userChoice;
const userChoiceDisplay = document.getElementById('user-choice');
const descuentoElegido = document.querySelectorAll('button'); //Asigna a variable descuentoElegido los botones en el documento 
*/


//Para asignar la elección del usuario cuando preciona el boton a la variable descuentoElegido
/*descuentoElegido.forEach(descuentoElegido => descuentoElegido.addEventListener('click', (e) => {
    userChoice = e.target.id //Asigna a variable userChoise. el boton que presionó el usuario
    userChoiceDisplay.innerHTML = userChoice //Asigna internamente el resultado del click del usuario a la variable UserChoice
  }))

  console.log(userChoice);
  document.write(`<br>`);
  */

//let producto_seleccionado = prompt('Qué producto con descuento comprarás')

