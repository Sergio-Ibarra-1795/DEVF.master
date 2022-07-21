const arrayDeNumeros = [1,2,3,4,5,6,7,8,9,10];

const callback = (accumulator,numeroActual) => {
    return accumulator + numeroActual;
};



const valorIniciao = 0; 

const sumatoria =  arrayDeNumeros.reduce(callback,0);
console.log (sumatoria);
