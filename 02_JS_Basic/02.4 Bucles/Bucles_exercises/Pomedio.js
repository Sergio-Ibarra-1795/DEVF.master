/*Ejercicio 3 Solicitar a un docente que indique la
 cantidad de estudiantes que tiene en su grupo, 
 luego solicitar la cantidad de notas de cada estudiante 
 y calcular el promedio de cada estudiante y el 
 promedio del grupo, imprimirlos en pantalla*/

var cantidad_estudiantes = Number(prompt('Cuantos estudiantes tienes en tu grupo:')); //Para que el docente ingrese el número de estudiantes en el grupo
var cantidad_notas = Number(prompt('Cuantas notas promediará cada estudiante:'));//Para que el docente ingrese el número NOTAS POR estudiante
var notas_separadas; //Inicializamos variable para guardar cada nota de cada estudiante
var notas_por_estudiante=[]; //Inicializamos el array para guardar las notas de cada estiante
var notas_por_estudiante_iesimo =[];
var suma_notas_por_estudiante; // Inicializamos la variable donde se guardará la suma de las notas para CADA estudiante
var promedio_notas_por_estudiante;// Inicializamos la variable donde se guardará el promedio de las notas para CADA estudiante
var promedio_total;// Inicializamos la variable donde se guardará el promedio total de TODOS los estudiantes del grupo 
var contador_estudiantes;
var inicio = 0;
var fin = inicio+cantidad_notas; 
var temporal1; 

 

for(i=0;i<cantidad_estudiantes;i++){  //Desde cero hasta el número total de estudiantes
    contador_estudiantes = i;
    
    for(j=0;j<cantidad_notas;j++){ //Se inicia un ciclo dentro de otro, para que por cada estudiante cuente sus notas por separado
    
        notas_separadas = prompt(`Indica la ${j+1} nota del estudiante:`) // va solicitando las notas de cada estudiante
        notas_por_estudiante_iesimo.push(notas_separadas);

    }

    notas_por_estudiante = notas_por_estudiante_iesimo.slice(inicio,fin);
    document.write(`${inicio} <br>`)
    document.write(`${fin} <br>`)
    document.write(`${notas_por_estudiante} <br>`); 
    document.write(`${notas_por_estudiante[0]} <br>`); 
    document.write(`<br>`); 

    temporal1 = Array.from(notas_por_estudiante);
    console.log(`${temporal1}`); 

    var suma_notas_por_estudiante = temporal1.reduce(function (sum, currentValue) {
        return sum + currentValue
      }, 0 //0 is the initial value
      ) 
      document.write(suma_notas_por_estudiante); 


    inicio +=cantidad_notas; //DEBESER HASTA CANTIDAD DE NOTAS!!! 
    fin = inicio +cantidad_notas; //DEBÍ DE INCREMENTAR TAMBIÉN EL FIN PARA QUE NO SALIERA VACÍO EL OTRO notas_por_estudiante
    
    
}