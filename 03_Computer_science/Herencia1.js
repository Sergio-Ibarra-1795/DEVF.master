/*1. Hacer superclase Maestro y subclases Maestro de Física y 
   Maestro de Música y a cada uno asignarle su materia y 
   calcular su promedio de grupo a partir de calificaciones	 
   (puedes usar arreglos). 

El maestro de física tiene un 
   atributo "antigüedad" que guarda un valor numérico, 
   mientras que el maestro de música tiene un atributo "edad"
   también guardando un valor numérico.*/

class Maestro {
      constructor(antigüedad_edad , calificaciones){
        this.antigüedad_edad = antigüedad_edad
        this.calificaciones = calificaciones
        this.promedio
      }

      CalculaPromedio(calificaciones){ //Método para calcular promedio
        for (let i=0; i<=calificaciones.lenght;i++ ){
               suma_calificaciones += calificaciones[i];               
        }
        this.promedio = (suma_calificaciones) / (calificaciones.lenght)
   }
}


class Maestro_musica extends Maestro {
    constructor (edad = 40, calificaciones = [10,9,8,7,6]){
        super (edad, calificaciones)
    }
} 


let Maestro_musica_uno = new Maestro_musica (40, [10,9,8,7,6])
Maestro_musica_uno.CalculaPromedio([10,9,8,7,6])
console.log(Maestro_musica_uno)



