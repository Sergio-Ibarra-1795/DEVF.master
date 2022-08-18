function persona(nombre){
    this.nombre = nombre //asignando nombre al prototipo persona 
}

let persona1 = Object.create(persona)
let persona2 = Object.create(persona1)
