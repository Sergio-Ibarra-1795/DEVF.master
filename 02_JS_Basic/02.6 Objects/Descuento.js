/*Diseñar un algoritmo que permita aplicar un descuento en el supermercad
de tal forma que se visualice el producto con el precio original y con el descuento. */

//Se inicializa objeto donde vivirán los productos y sus precios base
let productos_precio_base = {
    refrigerador:500,
    horno:150,
    lavadora:400,
    TV:450, 
}

//Se crea variable para lmacenar los productos y susd precios en un array [[Objeto1,precio1][Objeto2, precio2]]
let productos_con_precios_base = [];
let productos = [];
let precios_base = [];
let prueba = [];


productos_con_precios_base = Object.entries(productos_precio_base);
productos = Object.keys(productos_precio_base);//Forma un array con los keys del diccionario en cuestion
precios_base = Object.values(productos_precio_base);//Forma un array con los values del diccionario en cuestion

console.log(productos_con_precios_base);//Solo para verificar que se esté formando el array, a partir del objeto

const userChoiceDisplay = document.getElementById('user-choice');
const descuentoAelegir = document.querySelectorAll('button');
let userChoice;
let escalar;
let precios_con_descuento = [];
let precios_con_descuento_display =[]; 
let resultDisplay = document.getElementById('result');

//Para asignar la elección del usuario cuando preciona el boton a la variable descuentoAelegir
descuentoAelegir.forEach(descuentoAelegir => descuentoAelegir.addEventListener('click', (e) => {
  userChoice = e.target.id //Asigna a variable userChoise. el boton que presionó el usuario
  userChoiceDisplay.innerHTML = userChoice //Asigna internamente el resultado del click del usuario a la variable UserChoice
  Descuento()
}))

console.log(`${precios_base}`); //Para revisar internamente que se esté creando el array precios_base 

//Imprime los precios base de cada producto 
document.write(`<b>Precio base de productos (sin descuento):<br> </b>`);
document.write(`- El precio base del  ${productos[0]} es: $${precios_base[0]}<br>`);
document.write(`- El precio base del  ${productos[1]} es: $${precios_base[1]}<br>`);
document.write(`- El precio base del  ${productos[2]} es: $${precios_base[2]}<br>`);
document.write(`- El precio base del  ${productos[3]} es: $${precios_base[3]}<br>`);

//Para calcular e imprimir los precios de cada producto con descuento

document.write(`<br>`);
document.write(`<b> Precios con el descuento seleccionado:<br> </b>`);
document.write(`<br>`);

function Descuento (){
   
    if(userChoice==='10'){
        escalar =0.1;
        return precios_base.map(x=>x *(1-escalar)); //Precioas base es un array, que se está multiplicando por un escalar. [Una especie de vector por un escalar alfa]
    } else if (userChoice==='15'){
        escalar = 0.15;
        return precios_base.map(x=>x *(1-escalar)); //Precioas base es un array, que se está multiplicando por un escalar
    } else if (userChoice==='20'){
        escalar = 0.2;
        return precios_base.map(x=>x *(1-escalar));
    
    }
    
}
let precios = Descuento();
console.log(precios);
// resultDisplay.innerHTML = precios_con_descuento; //Para que el resultado de la función se muestre en el objeto Resultdisplay en le HTML (es un array, con los precios, dependiendo el descuento solicitado)
// document.write(`<br>`);
// document.write(precios);
// document.write(`Los precios con el descuento seleccionado son: ${precios_con_descuento.join(', ')} <br>`);
// document.write(`<br>`);

// //Imprime los precios con descuento de cada producto 
// document.write(`<b>Precio con descuento de productos (conforme al % seleccionado):<br> </b>`);
// document.write(`- El precio base del  ${productos[0]} es: $${precios_con_descuento[0]}<br>`);
// document.write(`- El precio base del  ${productos[1]} es: $${precios_con_descuento[1]}<br>`);
// document.write(`- El precio base del  ${productos[2]} es: $${precios_con_descuento[2]}<br>`);
// document.write(`- El precio base del  ${productos[3]} es: $${precios_con_descuento[3]}<br>`);