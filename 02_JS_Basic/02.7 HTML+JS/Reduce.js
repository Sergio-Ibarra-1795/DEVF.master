const arrayDeNumeros = [1,2,3,4,5,6,7,8,9,10];
const arrayDeNumeros2 = [100,2,3,4,5,6,7,8,9000,10];

const callback = (accumulator,numeroActual) => {
    return accumulator + numeroActual;
};



const valorInicial = 0; 

const sumatoria =  arrayDeNumeros.reduce(callback,valorInicial);
console.log (sumatoria);

const sumatoria2 =  arrayDeNumeros2.reduce(callback,valorInicial);
console.log (sumatoria2);