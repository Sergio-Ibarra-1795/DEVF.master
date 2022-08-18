/* Ejemplo de herencia de clase*/

class Mamifero {
    constructor(pelo,ojos,orejas){
        this.pelo = pelo // Truer or False || café, blanco | largo, corto
        this.ojos = ojos // 1,2,3,4 || café,verde,blanc || grandes, pequeños
        this.orejas = orejas //
    }
}


class Mamifero {
    constructor(caracteristicas){
        this.caracteristicas = ['pelo','ojos', 'orejas']
    }

}

class Gatito extends Mamifero {
    constructor(pelos, ojos, orejas){
        super(pelos, ojos, orejas) // new Mamirefero (pelo, ojos, orejas)
    }
}

let Gargiedl = new Gatito('naranja','','')
class Perrito extends Mamifero {}