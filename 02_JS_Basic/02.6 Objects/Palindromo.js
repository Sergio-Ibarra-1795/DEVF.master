/* Crear un algoritmo que determine si una palabra o frase es 
un palindromo, un palindromo es una frase o palabra que se le 
igual de izquierda a derecha como de derecha a izquierda, Ejm: Anita lava la tina*/

let palindromo; 
let palindromo_sin_espacios;
let array_palindromo = [];

palindromo = prompt('Escribe tu frase para ver si es un palindromo')
palindromo_minuscula = palindromo.toLowerCase();
palindromo_sin_espacios = palindromo_minuscula.replace(/\s+|\s+$/gm,'');

//Para formar un array con todas las letras del palindromo 
array_palindromo = palindromo_sin_espacios.split("");

//Funnción que detemrina si es un palindromo 
function IdentiPalindrormo (palindromo){
    if (array_palindromo[0]=== array_palindromo[array_palindromo.length - 1] &&
        array_palindromo[1]=== array_palindromo[array_palindromo.length - 2] &&
        array_palindromo[2]=== array_palindromo[array_palindromo.length - 3] &&
        array_palindromo[3]=== array_palindromo[array_palindromo.length - 4] &&
        array_palindromo[4]=== array_palindromo[array_palindromo.length - 5] &&
        array_palindromo[5]=== array_palindromo[array_palindromo.length - 6] &&
        array_palindromo[6]=== array_palindromo[array_palindromo.length - 7] &&
        array_palindromo[7]=== array_palindromo[array_palindromo.length - 8] &&
        array_palindromo[8]=== array_palindromo[array_palindromo.length - 9] &&
        array_palindromo[9]=== array_palindromo[array_palindromo.length - 10]
        )

        document.write(`La frase: ${palindromo} SI es un palindromo`)
    else
    document.write(`La frase: ${palindromo} NO es un palindromo`)

}

IdentiPalindrormo(palindromo);