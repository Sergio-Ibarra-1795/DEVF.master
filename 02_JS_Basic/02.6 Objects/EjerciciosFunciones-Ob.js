/*Alrogitmo que permite ingresar el nombre, edad y ciudad de una persona 
y los resultados se muestren en pantalla*/

/*function Identificador (){
    let nombre, edad, ciudad; 
    let identificador_iesimo=[];
    nombre = prompt('Cómo te llamas:');
    edad = prompt('Cuantos años tienes:');
    ciudad = prompt('En donde vives:');
    identificador_iesimo.push(nombre,edad,ciudad);
    return identificador_iesimo;

}

document.write(Identificador()); */



//Diseñar un algoritmo que permita calcular el salario mensual de un trabajadir
//Teniendo en cuenta los dias que trabajo y el valor de cada día 


/*let dias2, valor2, nombre; 

function SalarioMensual (dias,valor){
    let salario_mensual;  
    salario_mensual = dias*valor; 
    return salario_mensual;
}

nombre = prompt('Cuál es el nombre del trabajador') ;
dias_display = Number(prompt(`Cuantos días trabajó ${nombre} durante el pasado mes:`));
valor_display = Number(prompt(`Cuál es el salario diario:`));

SalarioMensual(dias_display,valor_display);
document.write(`El salario del mes de ${nombre} es: ${SalarioMensual(dias_display,valor_display)} MxN`);*/


/*
function SalarioMensual (){
    let nombre, dias, valor;
    let salario_mensual;  
    nombre = prompt('Cuál es el nombre del trabajador') ;
    dias = Number(prompt(`Cuantos días trabajó ${nombre} durante el pasado mes:`));
    valor = Number(prompt(`Cuál es el salario diario:`));
    salario_mensual = dias*valor; 
    return salario_mensual
}

document.write(`El salario del mes es: ${SalarioMensual()} MxN`);
*/





//Diseñar un algoritmo que permita determinar el porcentaje de hombres y mujeres en un grupo 

/*let porcentaje_masculino_display, porcentaje_femenino_display;
let porcentaje_diversidad_display =[];

function PorcentajeDiversidad(){
    let masculino, femenino, total;
    let porcentaje_masculino, porcentaje_femenino;
    let porcentaje_total = [];
    masculino = Number(prompt(`Cuantos alumnos en el grupo se identifican como masculino:`));
    femenino = Number(prompt(`Cuantos alumnos en el grupo se identifican como femenino:`));
    total = masculino + femenino;
    porcentaje_masculino = (masculino)/(total);
    porcentaje_femenino = (femenino)/(total);
    porcentaje_total.push(porcentaje_masculino,porcentaje_femenino);
    return porcentaje_total;
}

//console.log(PorcentajeDiversidad());
porcentaje_diversidad_display = PorcentajeDiversidad();
porcentaje_masculino_display = ((porcentaje_diversidad_display[0])*100);
porcentaje_femenino_display = ((porcentaje_diversidad_display[1])*100);

document.write(`Porcentaje de diversidad de género en el grupo:<bold>`);
document.write(`<br>`);
document.write(`- El porcentaje masculino en el grupo es ${porcentaje_masculino_display} %`);
document.write(`<br>`);
document.write(`- El porcentaje femenino en el grupo es ${porcentaje_femenino_display} %`);*/


//Algortimo para calcular las operaciones aritmeticas básicas 

let number1, number2; 

number1 = Number(prompt('Ingrese el primero de los números a computar:'));
number2 = Number(prompt('Ingrese el segundo de los números a computar:'));

document.write(`El primer número que elegiste es: ${number1} <br>`);
document.write(`El segundo número que elegiste es: ${number2} <br>`);
document.write(`<br>`);

function Suma (number1,number2){
    let suma; 
    suma = number1 + number2; 
    return suma;
}

document.write(`La suma de los números ${number1} y ${number2} es: ${Suma(number1,number2)} <br>`);

function Substraction (number1,number2){
    let resta; 
    resta = number1 - number2; 
    return resta;
}
document.write(`La resta de los números ${number1} menos ${number2} es: ${Substraction(number1,number2)}<br>`);

function Multiplication (number1,number2){
    let multiplicacion; 
    multiplicacion = number1*number2; 
    return multiplicacion;
}
document.write(`La multiplicaición de los números ${number1} por ${number2} es: ${Multiplication(number1,number2)} <br>`);


function Divition (number1,number2){
    let division;
    if (number2!==0){
    division = number1/number2;
    } else if (number2 ===0){
    document.write('No existe la división entre cero');    
    } 
    return division;
}

document.write(`La división de los números ${number1} entre ${number2} es: ${Divition(number1,number2)} <br>`);


function Power (number1,number2){
    let potencia;
    if (number2===0){
    potencia = number1;
    } else if (number2 !==0){
    potencia = number1**number2  
    } 
    return potencia;
}


document.write(`El número ${number1} a la potencia ${number2} es: ${Power(number1,number2)} <br>`);