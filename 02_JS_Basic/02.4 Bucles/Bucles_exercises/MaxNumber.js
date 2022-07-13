/* Ejercicio 2.
Solicitar al usuario que ingrese tres números
y mostrar cuál de los tres es el número mayor.
Considerar el caso en que 2 números sean iguales.
*/

//Solicitar al usuario que ingrese los n números deseados
alert('Encontraremos el mayor número en una serie dada') //Para iniciar el programa de cara a usuario 
var array_medida = Number(prompt('Cuántos números tendrá tu serie'))//Para definir el número de elementos en el array_numbers
var array_numbers =[]; //Se inicializa el array donde se guardarán los números 
var numero_separado; //Se inicializa variable donde se irán recolectando los números que el usuario ingrese

for(i=0;i<array_medida;i++){

    numero_separado = Number(prompt(`Ingrese el valor ${i+1} en su serie de ${array_medida} números`));//Para ir recolectando los números que el usuario quiera ingresar
    array_numbers.push(numero_separado); //Para ir guardando los números recolectados en el array_numbers
}

document.write(`Tu serie de números es: [${array_numbers}]`);
document.write(`<br>`);

/*Mostrar cuál de los tres es el número mayor.
Considerar el caso en que 2 números sean iguales.
*/

var largest = array_numbers[0]; //Inicializo la variable largest asignandola al primer elemento del array_numbers
for(var i=0;i<array_numbers.length;i++){ //Para cada elemento dentro del arrray_numbers
        if (array_numbers[i]>largest){ //Compara si ese elemento i-esimo es mayor que el primero que tomó que fue el "primer elemento del array"
            largest = array_numbers[i] //En caso de que el elemento i-esimo sea mayor, sustituye su valor en la variable largest
            document.write(`${largest}`)
        } 
}
document.write(`El número mayor en tu serie es: ${largest}`) // Show the largest number inarray_numbers











