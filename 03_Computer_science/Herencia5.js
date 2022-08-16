/*5.- Crea una subclase de Electrodomestico llamada Lavadora 
    con las siguientes características:
    a. Su atributo es carga(kg de ropa), además de los 
       atributos heredados.
    b. Crea el método precioFinal(). Este se calcula
       multiplicando el consumoEnergetico por la carga.*/

       
class Electrodomestico {
    constructor(precio, color, capacidad){
        this.precio = precio
        this.color = color
        this.capacidad = capacidad
        this.consumoEnergetico = 100
    }
    
}


class Lavadora extends Electrodomestico {
    constructor(precio, color, capacidad, carga){
     super(precio, color, capacidad)
     this.carga = carga
    }
    PrecioFinal (){
    PrecioFinal = (consumoEnergetico) * (carga)
    this.PrecioFinal = PrecioFinal
    }
}



let Lava1 = new Lavadora (10000, 'gris', '14kg', 15)

console.log(casa_interes)



