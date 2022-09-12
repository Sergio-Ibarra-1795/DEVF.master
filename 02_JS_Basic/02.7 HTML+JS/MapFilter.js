const frutas = [
    'Pera', 
    'Manzana', 
    'Melon', 
    'Sandia',
    'Piña',
    'Melon',
    'Guayaba',
    'Sandia',
    'Melon']


function callback(el){
    return el.toUpperCase(); 

}

const frutasEnMayuscualas = frutas.map(callback); // map nos regresará un neuvo array que gurdaREMOS en una cosntante

console.log(frutasEnMayuscualas);




const arrayDeNumeros = [1,2,3,4,5,6,7,8,9,10];
function callback2 (el){
    return el**2
}
const NumerosAlCuadrado = arrayDeNumeros.map(callback2);
console.log(NumerosAlCuadrado);



//FILTER METHOD (Para filtrar solo píña, pera y manzana)

const callbacck3 =function(fruta){
    let esValido;
    switch(fruta){
        case 'Piña':
            esValido = true;
            break;
        case 'Pera':
            esValido = true;
            break;
        case 'Manzana':
            esValido = true;
            break;

    }
    return esValido;
}

const pinasPerasManzanas = frutas.filter(callbacck3);
console.log(pinasPerasManzanas);

