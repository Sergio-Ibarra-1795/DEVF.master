var frutas = ['Pera', 'Manzana', 'Melon', 'sandia','piña']

console.log(frutas[2]); //Melon
console.log(frutas[4]); //Piña
console.log(frutas[10]); //Undefined
console.log(frutas[-1]); //Undefined

frutas[0] = 'Guayaba';
console.log(frutas);
console.log(frutas.length);

frutas.push ('Mandarina');
frutas.push ('Mandarina2');
console.log(frutas);
console.log(frutas.length);

frutas.pop(); //No es necesario difinir nada dentro de pop(), pues eimpre quita el último
fruta_podrida = frutas.pop()
console.log(frutas);
console.log(frutas.length);
console.log(fruta_podrida);

frutas.unshift('Fresa');
frutas.unshift('Uvas');
frutas.unshift('Más Uvas');
console.log(frutas);
console.log(frutas.length);
Fruta_perida2 = frutas.shift();
console.log(Fruta_perida2);
console.log(frutas);


slice1 = frutas.slice(2,5);
console.log(slice1);

slice2 = frutas.slice(1,-3);
console.log(slice2);
console.log(frutas);

var verduras = ['cebolla', 'perejil', 'tomate', 'calabaza', 'brocoli'];
console.log(verduras);

//Agregar aguacate y lechuga, DESPUÉS DE calabaza sin borrar nada 

verduras.splice(4,0,"Aguacate","Lechuga");
console.log(verduras);



var one = "John,Doe,120 jefferson st.,Riverside, NJ, 08075";
var manipulado = one.split(',');
console.log(manipulado);

var two = "JAN	340	360	417";
var manipulado2 = two.split(' ');
console.log(manipulado2);

//Splice to remive and add elements from an array in JS 

//To delete items
var mas_verduras = ['aguacate','tomate','papa','zanahoria','lechuga']
console.log(mas_verduras)
mas_verduras.splice(2,1)
console.log(mas_verduras)


//Split to deal with strings
mas_verduras.splice(1,0, 'agregada1','agregada2')
console.log(mas_verduras)

let mas_verduras2 = mas_verduras.toString()
console.log(typeof(mas_verduras2))
mas_verduras2.split("",5)
console.log(mas_verduras2)


// Fecha gringa
var fechaGringa ='2022-12-30'
var fechaMexa = fechaGringa.split("-").reverse().join('-')
console.log(fechaMexa)






