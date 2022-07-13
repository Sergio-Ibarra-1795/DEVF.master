/* Hacer un programa que solicite la cantidad d ingredientes
para preparar un platillo y los ingredientes para su 
preparación. Por último imprimir en pantalla la lista de ingrdientes*/


/*
var separado; 
var num_ingredients = Number(prompt('Cuantos ingredientes tendrá tu platillo'));
var ingredients = []; //Array para guardar los indrdientes 
var contador; 



for (i=1;i<=num_ingredients;i++){
    separado = prompt(`Escribe el ingrediente ${i}`);
    ingredients.push(separado);
    contador = i;

}
*/

//Para imprimir todos los ingredientes en el array 

/*document.write(`Ingredientes para hacer el platillo: <br>`);
for (j=0; j<ingredients.length;j++){
document.write(`${j+1}. ${ingredients[j]} <br>`);
}*/


/*
1. Crear un arreglo de 6 platillos
1.2. Mediante un ciclo for, mostrar todos los platillos
1.3. Mediante un for o  if, mostrar solo la valor 3 y 5 
1.4. Mediante un for o if, mostrar los elementos impares
1.5. Mediante un for o if, mostrar los elementos pares*/


var arreglo1 = ['enchilada','sushi','alitas','hamburguesa','mole','tacos']

for(i=0;i<arreglo1.length;i++){

    document.write(`${arreglo1[i]} ;`);
   
}


document.write('<br>');

document.write(`${arreglo1[2]} <br>`);

//1.3. Mediante un for o  if, mostrar solo la valor 3 y 5 
for(i=0;i<arreglo1.length;i++){
    if (arreglo1.length = 2) {
        document.write(`${arreglo1[2]} <br>`);
    } else if (arreglo1.length = 4){
        document.write(`${arreglo1[4]}<br>`);
    }
}


//1.4. Mediante un for o if, mostrar los elementos impares
for(i=0;i<arreglo1.length;i++){
    if (arreglo1.length%2!==0 ) {
        document.write(`${arreglo1[i]} <br>`);
        document.write(`${arreglo1}`)
    } 
}
   
   









/*
Ejercicio 2.
Solicitar al usuario que ingrese tres números
y mostrar cuál de los tres es el número mayor.
Considerar el caso en que 2 números sean iguales.
*/


//Program to find the largest number in the given 1D array. 

var arreglo2 = [];
var i = 0; 
var numero_total =  Number(prompt(`Ingrese el número de números en su array`));
var numero_i;

for(i=0; i<numero_total;i++){

    numero_i = Number(prompt(`Ingrese el número ${i+1} de su array`));
    arreglo2.push(numero_i);
}

console.log(arreglo2);

var largest = arreglo2[0];
for(var i=0;i<arreglo2.length;i++){
    if (arreglo2[i]>largest){
        largest = arreglo2[i]
    } else
        largest = arreglo2[0]; //Check largest number
}
document.write(`The largest number you wrote was: ${largest}`) // Show the largest number










/*Ejercicio 3
Solicitar a un docente que indique la
 cantidad de estudiantes que tiene en su grupo, 
 luego solicitar la cantidad de notas de cada estudiante 
 y calcular el promedio de cada estudiante y el 
 promedio del grupo, imprimirlos en pantalla*/


var number_students = Number(prompt('Cuantos estudiantes tienes:'));
var number_subjects = Number(prompt('Cuantas materias cursa cada uno:'))
var notas_por_estudiante_i = [];
var notas_por_estudi; 
var total_por_estudiante;
var prom_por_estudiante; 
var suma_total;
var prom_total;

for (i=0; i<number_students;i++){

    for (j=0; j<number_subjects;j++){
        notas_por_estudi = Number(prompt(`Primer nota de estudiante ${i}`))
        notas_por_estudiante_i.push(notas_por_estudi);
        total_por_estudiante += notas_por_estudi;

        prom_por_estudiante = (total_por_estudiante)/(notas_por_estudiante_i.length);
        console.log(prom_por_estudiante);
    }

    console.log(total_por_estudiante);
    
    suma_total += prom_por_estudiante;
    prom_total = (prom_por_estudiante)/(number_students);
    console.log(prom_total);

}









