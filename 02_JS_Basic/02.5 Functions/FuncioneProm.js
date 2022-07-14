/*Crear una aplicacion que permita a un profe, indicar cuantos alumnos tiene en su materia y cuantas
notas recogio para cada estudiante y calcular el promedio individual y grupal.*/

//variables globales
let cantidadAlumnos, cantidadNotas, promedioGrupal;
let datosGrupo = [];

//solicitamos los datos
cantidadAlumnos = Number(prompt('Ingresa la cantidad de alumnos en tu grupo'));
cantidadNotas = Number(prompt('Ingresa la cantidad de notas a promediar por alumno'));

//Funcion que realiza la solicitud de datos al usuario para cada alumno
function SolicitarAlumnos(){
    //variables
    let grupo = [];

    //iteramos para solicitar los datos por alumno
    for(let i=1; i<=cantidadAlumnos; i++){
        //variables
        let alumno = [];
        let nombre = prompt(`Ingresa el nombre del alumno ${i}`);

        //guardo datos del alumno
        alumno.push(nombre);
        alumno.push(SolicitarNotas(nombre));

        grupo.push(alumno);
    }

    function SolicitarNotas(nombre){
        //variables
        let notas = [];

        for(let j=1; j<=cantidadNotas; j++){
            let nota = Number(prompt(`Ingresa la nota ${j} del estudiante ${nombre}`))

            notas.push(nota);
        }
        
        return notas;
    }

    return grupo;
}

datosGrupo = SolicitarAlumnos();
