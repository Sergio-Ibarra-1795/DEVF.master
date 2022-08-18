/*1. Hacer superclase Maestro y subclases Maestro de Física y   Maestro de Música y a cada uno asignarle su materia y 
calcular su promedio de grupo a partir de calificaciones	(puedes usar arreglos). 

El maestro de física tiene un atributo "antigüedad" que guarda un valor numérico,  mientras que el maestro de música tiene un atributo "edad"
también guardando un valor numérico.*/

class Maestro {
      constructor(antigüedad_o_edad , calificaciones){
        this.antigüedad_edad = antigüedad_o_edad
        this.calificaciones = calificaciones
        this.promedio
      }

      CalcularPromedio(){ //Método para calcular promedio
         let suma_calificaciones = 0
         for (let i=0; i<this.calificaciones.length;i++ ){
               suma_calificaciones += this.calificaciones[i];               
        }
        this.promedio = (suma_calificaciones) / (this.calificaciones.length)
   }
}


class Maestro_musica extends Maestro {
    constructor (edad, calificaciones){
        super (edad, calificaciones)
    }
} 


let Maestro_musica_uno = new Maestro_musica (40, [10,9,8,7,6])
Maestro_musica_uno.CalcularPromedio()
console.log(Maestro_musica_uno)


class Maestro_fisica extends Maestro {
  constructor (antigüedad, calificaciones){
      super (antigüedad, calificaciones)
  }
} 


let Maestro_fisica_uno = new Maestro_fisica (40, [10,9,8,7,6])
Maestro_musica_uno.CalcularPromedio()
console.log(Maestro_musica_uno)



