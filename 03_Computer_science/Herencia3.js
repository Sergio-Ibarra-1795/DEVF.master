/*3.- Crear una clase Bebida que herede a dos clases Cerveza 
y Refresco. Ambas clases deben tener la propiedad 
cantidad (ml). La clase Refresco debe tener el atributo
azucar(g) y la clase Cerveza debe tener el atributo 
porcentajeAlcohol(%)
. Crear los getters y setters
Correspondientes.*/

class Bebida {
    constructor (cantidad){
        this.cantidad = cantidad
    }
}

class Cerveza extends Bebida {
    constructor(cantidad, porcentajeAlcohol){
       super(cantidad)
       this.porcentajeAlcohol  = porcentajeAlcohol;
         
    }
}

let Cerveza_indio = new Cerveza (350, 0.04)
console.log(Cerveza_indio)


class Refresco extends Bebida {
    constructor(cantidad, porcentajeAzuzar){
       super(cantidad)
       this.porcentajeAzuzar  = porcentajeAzuzar;
         
    }
}

let coke= new Refresco (450, 0.2)
console.log(coke)