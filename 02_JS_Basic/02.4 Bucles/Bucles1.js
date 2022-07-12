//Bucles in JS

//While bucle 
var index = 0;
while (index<11) {
    console.log(index);
    index = index +1 
}


//Ejemplo: Calcular la edad de una persona e imprimir los números del 1 a la edad de la persona
var nacimiento = Number(prompt('¿En que año naciste?'));
var actual = Number(prompt('¿En que año estamos?'));
var edad = actual-nacimiento;
var contador = 1 ;

while (contador<=edad) {
    console.log(contador);
    contador = contador + 1;
    
}