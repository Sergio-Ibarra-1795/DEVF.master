//crear clase que basicamente representa a la estrcutura del objeto 
//Las clases tiene un constructor que es una especie de función que construye a dicha clase. 
//El constructor tiene las propiedades deseadas con que se consturirá la clase

class Alumnos {
    constructor(nombre, promedio){
        this.nombre = nombre,
        this.promedio = promedio
    }
}


let arregloAlumnos =[];

for (let i=1; i<=3; i++){
    let nombre = prompt(`Ingresa el nombre del alumno ${i}`);
    let promedio = prompt(`Ingresa el promedio del alumno ${i}`);
    let alumno = new Alumnos(nombre,promedio); //crea la copia de la clase para que ALUMNO ya sea un objeto, que tiene porpiedades y estrcutura de la clase alumnos 
    arregloAlumnos.push(alumno);
    
}

console.log(arregloAlumnos);




