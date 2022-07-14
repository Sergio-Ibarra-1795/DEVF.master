/*Calcula el promedio de un grupo de n alumnos que tomó m materias, así como el promedio de cada alumno*/
 
 var cantidad_estudiantes = Number(prompt('Cuantos estudiantes tienes en tu grupo:')); //Para que el docente ingrese el número de estudiantes en el grupo
 var cantidad_notas = Number(prompt('Cuantas notas promediará cada estudiante:'));//Para que el docente ingrese el número NOTAS POR estudiante
 var nombre_estudiante_iesiemo;
 var notas_separadas; //Inicializamos variable para guardar cada nota de cada estudiante
 var notas_total=[]; //Inicializamos el array para guardar las notas de cada estiante
 var notas_por_estudiante_iesimo =[];
 var suma_notas_por_estudiante; // Inicializamos la variable donde se guardará la suma de las notas para CADA estudiante
 var promedio_notas_por_estudiante;// Inicializamos la variable donde se guardará el promedio de las notas para CADA estudiante en cada vuelta 
 var promedios_total_estudiantes=[]; // Inicializamos la variable donde se guardarán los promedios de TODOS del grupo 
 var suma_promedios_total; //// Inicializamos la variable donde se guardará la suma total de TODOS los promedios de los estudiantes del grupo 
 var promedio_total;// Inicializamos la variable donde se guardará el promedio total de TODOS los estudiantes del grupo 
 var inicio = 0;
 var fin = inicio+cantidad_notas; 

 document.write(`El promedio de cada alumno es: <br>`); 
 for(i=0;i<cantidad_estudiantes;i++){ 
    nombre_estudiante_iesiemo = prompt(`Indica el nombre del estudiante ${i+1}`); //Va pidiendo el nombre de cada estudiante  //Desde cero hasta el número total de estudiantes

     for(j=0;j<cantidad_notas;j++){ //Se inicia un ciclo dentro de otro, para que por cada estudiante cuente sus notas por separado

        notas_separadas = Number(prompt(`Indica la ${j+1} nota del estudiante ${nombre_estudiante_iesiemo}:`)) // va solicitando las notas de cada estudiante
        notas_total.push(notas_separadas);//Forma un array con las notas de todos los estudiantes 
 
     }
       
    notas_por_estudiante_iesimo = notas_total.slice(inicio,fin);//Para ir tomando las notas_por_estudiante, haciendo slice del notas_total tomando solo las notas de cada estudiante    
    suma_notas_por_estudiante = notas_por_estudiante_iesimo.reduce(function (sum, currentValue) {
         return sum + currentValue
       }, 0 //0 is the initial value
       )   
    
    promedio_notas_por_estudiante = (suma_notas_por_estudiante)/(cantidad_notas)
       document.write(`${i+1}. Promedio estudiante ${nombre_estudiante_iesiemo} es: ${promedio_notas_por_estudiante}<br>`); 
    promedios_total_estudiantes.push(promedio_notas_por_estudiante)//Para ir guardando el promedio de cada estudiasnte, en cada vuelta  
    
    inicio +=cantidad_notas; //DEBESER HASTA CANTIDAD DE NOTAS!, para que cada iteración inicie en un "nuevo array" 
    fin = inicio +cantidad_notas; //De esa manera es como sumarle al inicio, otravez la cantidad de notas por estudiante y "Separar" cada estudiante en un array diferente con el slice que se hace
 }

 suma_promedios_total = promedios_total_estudiantes.reduce(function (sum, currentValue) {
    return sum + currentValue
  }, 0 //0 is the initial value
  ) 
 promedio_total = (suma_promedios_total)/(cantidad_estudiantes)
    document.write(`<br>`); 
    document.write(`El promedio del grupo es: ${promedio_total}<br>`); 
    



