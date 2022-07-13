//Funciones sin parametros y sin return 

function Suma(){
    alert(`La suma es ${2+2}`)
}

//Ejecutando la función sin parametros
Suma()


//Funciones CON parametros y sin return 

function SumaDos(num1,num2){
    alert(`La suma es ${num1+num2}`)
}
//Ejecutando la función con parametros
SumaDos(2,5)


//Funciones CON parametros y CON return 

function SumaReturn(num1,num2){
    return num1 + num2 ;
}

var mensaje = SumaReturn(3,6);
document.write(`La suma es ${mensaje}`)


//FUNCIONES ANONIMAS 

var mensaje = function (num1,num2) {
    return `La suma es ${num1 + num2}`
}
document.write(mensaje(10,12));





