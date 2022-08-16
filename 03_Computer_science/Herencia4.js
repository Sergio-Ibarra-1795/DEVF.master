/*4.- Crea una superclase llamada Electrodoméstico con las 
    siguientes características:
    a. Sus atributos son precio, color, consumoEnergetico
       y capacidad (peso máximo)
    b. El constructor solo debe pedir precio, color 
       y capacidad. 
    c. consumoEnergetico debe iniciar con valor de 100*/

class Electrodomestico {
    constructor(precio, color, capacidad){
        this.precio = precio
        this.color = color
        this.capacidad = capacidad
        this.consumoEnergetico = 100
    }
}


let Electro1 = new Electrodomestico (350, 'negro',500)
console.log(Electro1)

