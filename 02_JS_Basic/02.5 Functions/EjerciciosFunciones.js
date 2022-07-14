/*1.Escribe una función llamada evaluate que reciba como parámetro un número retorne lo siguiente:
"Positivo" si el número es positivo.
"Negativo" si el número es negativo.
// "Cero" si el número es cero.*/


var number1 = Number(prompt('Escriba el número a evaluar:'));
var result;
function PosOrNeg (number1){
    if (number1<0){
        document.write(`El número: ${number1} es negativo <br>`);
    } else if (number1>0){
        document.write(`El número: ${number1} es positivo <br>`);

    } else {
        document.write(`El número: ${number1} es cero <br>`);

    }
//console.log(PosOrNeg(number1));
}

result = PosOrNeg(number1)
document.write(result);




/*2. Escriba una función para ingresar 
cualquier letra del alfabeto y verifique 
si es vocal o consonante*/

var str = (prompt('Escriba el string a evaluar:'));
var evalador;
function isUpperCase(str) {
    return str === str.toUpperCase();
}
evalador = isUpperCase(str);

if (evalador ==true){
    document.write(`El string: ${str} es MAYUSCULA <br>`)
} else if(evalador==false){
    document.write(`El string: ${str} es minuscula <br>`)
}



