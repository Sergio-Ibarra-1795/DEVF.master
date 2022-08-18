/*3.1- Crear una clase Bebida que herede a dos clases Cerveza  y Refresco. Ambas clases deben tener la propiedad 
cantidad (ml). La clase Refresco debe tener el atributo azucar(g) y la clase Cerveza debe tener el atributo 
porcentajeAlcohol(%). Crear los getters y setters Correspondientes.*/

class Bebida {
constructor (sabor,cantidad_ml= undefined) {
    this.sabor = sabor;
    this.cantidad_ml = cantidad_ml;
}
setSabor (newSabor) {
    this.sabor = newSabor;
}
setCantidadML (cantidad ) {
    this.cantidad_ml = cantidad;
}
getCantidadML () {
    return this.cantidad_ml;
}
}

class Refresco extends Bebida {
constructor (sabor, cantidad_ml, azucar_gr) {
    super(sabor,cantidad_ml);
    this.azucar_gr = azucar_gr;
}
setAzucar (azucar) {
    this.azucar_gr = azucar;
}
getAzucar () {
    return this.azucar_gr;
}
}


class Cerveza extends Bebida {
constructor (sabor = "cebada",cantidad_ml = 355, grados_alcohol = 4.1) {
    super(sabor,cantidad_ml);
    this.grados_alcohol = grados_alcohol;
}
setAlcohol (alcohol) {
    this.grados_alcohol = alcohol;
}
getAlcohol () {
    return this.grados_alcohol;
}
}


let indio = new Cerveza();
indio.setAlcohol(6)
let fanta = new Refresco("naranja",600, 28.8);
let cocacola = new Refresco("cola",600, 45);
console.log(indio);
console.log(cocacola);
console.log(fanta);