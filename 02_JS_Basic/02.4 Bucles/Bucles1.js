//Bucles in JS

//While bucle 
/*var index = 0;
while (index<11) {
    console.log(index);
    index = index +1 
}*/


//Ejemplo: Calcular la edad de una persona e imprimir los números del 1 a la edad de la persona
var nacimiento = Number(prompt('¿En que año naciste?'));
var actual = Number(prompt('¿En que año estamos?'));
var edad = actual-nacimiento;
var contador = 1 ;

while (contador<=edad) {
    console.log(contador);
    contador = contador + 1;
    //contador  ++ Puedo incrementar de a un numero por vez;
    //contador  +=3 Puedo incrementar de a MÁS un numero por vez;   
}
document.write(`Tu edad es:${edad} años`);



// CICLOS DO-WHILE 

var contador_do = 0; 
do {
    contador_do +=1;
    console.log(`Conteo:${contador_do}`)
} while (contador_do < 10)


// Jugar la loteria con números entre 1 a 100, mostrar ganador el 77

var number_do;
var win_number; 
var keep_numbers = []; //Para guardar los números random

win_number =Number(prompt('Ingrese el número que será ganador:'))

if(isNaN(win_number)){ //Valida si win_number es un número
    alert('Ingresa un número')
} else
do {
    number_do = Math.round(Math.random()*100) //gives a random number 
    keep_numbers.push(number_do)
    console.log(number_do)
} while (number_do != win_number)

if (number_do === win_number){
    alert('Eres el ganador')
   
}

console.log(keep_numbers)





//CICLOS FOR- SE REPETIRÁ UN NÚMERO DETEMRINADO DE VECES 

pokemons = ['pokemon1','pokemon2','pokemon3','pokemon4','pokemon5']

consol.log(pokemons.lenght())

for (var index_for =0; index_for<=pokemons.lenght(); index_for++){
    console.log(pokemons[index_for])

}


