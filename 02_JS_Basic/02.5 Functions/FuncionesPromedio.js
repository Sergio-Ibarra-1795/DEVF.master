/*Ejercicio 3 Solicitar a un docente que indique la
 cantidad de estudiantes que tiene en su grupo, 
 luego solicitar la cantidad de notas de cada estudiante 
 y calcular el promedio de cada estudiante y el 
 promedio del grupo, imprimirlos en pantalla*/


 // Variables globales 

 let CantidadAlumnos; CantidadNotas; 

 //Solicitamos los datos 

CantidadAlumnos = Number(prompt('Ingresa cantidad de alumnos')); 
CantidadNotas = Number(prompt('Ingresa cantidad de notas a promediar por alumno'));

function SolicitarAlumnos (){//Los parametros en la funcion no necesariamente deben estar declaradas pues son las variables globales
    //variables para la función 
    let grupo =[]; //Para ir guardando los datos de todos los estudiantes
    
    //Iteramos para solicitar los datos por alumno
    for(i=1;i<=CantidadAlumnos;i++){
        //variables que se "vuelven a declarar" por cada vuelta de este ciclo for
        let alumno = [];
        let nombre = prompt(`Ingresa el número del alumno ${i}`); //Cada nombre se debe ir almacenando en alguna parte
        
        //guardar datos del alumno
        alumno.push(nombre);
        alumno.push(SolicitarNotas(nombre));

        grupo.push(alumno);

    }

    function SolicitarNotas(nombre){
        //variables
        let notas =[];
        for(let j=1;j<=CantidadNotas;j++){
        let nota = prompt(`Ingresa la nota ${j} del estudiante ${nombre}`)
        notas.push(nota);}
    } return notas;


} return grupo;

console.log(SolicitarAlumnos);
