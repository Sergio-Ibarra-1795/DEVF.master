
/*2.- Crear la clase construcción que hereda a otras dos  clases "casa" y "edificio". 
a. Sus atributos son: numPuertas, numVentanas, numPisos,
   direccion, altura, largo y ancho del terreno.
b. Cada uno tiene un método que regresa los metros 
   cuadrados
c. Un método debe regresar la dirección (Calle X, # 123, Col…)
d. Un método debe permitir modificar la direccion
e. Buscar la mejor manera de aprovechar la herencia*/


//Se define la super-clase o clase padre
class Construccion {
    constructor(numPuertas, numVentanas, numPisos, altura, largo, ancho, direccion ={calle:'Caranza', num:'123'} ){
        this.numPuertas = numPuertas
        this.numVentanas = numVentanas
        this.numPisos = numPisos
        
        this.altura = altura
        this.largo = largo
        this.ancho = ancho

        this.direccion = direccion
    }

    cambiarDireccion(newDireccion){ //SetDirection (Direction)
        this.direccion = newDireccion

    }

}



//Se define la sub-clase con los argumentos necesarios para su conpcepción 
class Casa extends Construccion {
    constructor (numPuertas=6, numVentanas=5, numPisos=2, altura=20, largo=10, ancho=12, direccion){
        super (numPuertas, numVentanas, numPisos, altura, largo, ancho, direccion)
    }
} 


let casa_interes = new Casa (6,5,2,10,7,10)

console.log(casa_interes)

class Edificio extends Construccion {
    constructor (numPuertas=6, ventanasPorpiso=5, numPisos=5, altura=100, largo=20, ancho=25, direccion){
        let numVentanas = numPisos * ventanasPorpiso
        super (numPuertas, numVentanas, numPisos, altura, largo, ancho, direccion)
    }
}

let edificio_interes = new Edificio (8,6,4,50,15,16, {calle:'Calle 13', num:'13!'})
console.log(edificio_interes)


//Cambiar dirección 

edificio_interes.cambiarDireccion({calle:'Calle k-torce', num:'14!!'})
console.log(edificio_interes)
