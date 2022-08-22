//Para implementar una pila en JS
class Stack {
    constructor(){
        this.item = [] //Atributo para almacenar datos
    }

    push(item){ //Para implementar el push en la pila
        this.item.push(item);
    }

    pop(){ //Para implementar el pop en la pila
       return this.item.pop(); //DEBDE LLEVAR RETURN 
    }

    peak(){ //Para implementar el pop en la pila
        return this.item(this.item.length-1); //Menos 1 porque empieza en cero
     }

    size(){ //Para implementar el pop en la pila
        return this.item.length; //
     }
    
    print(){ //Para implementar el pop en la pila
        //console.log(this.item); // Otra opción para mostrar
        //document.write(this.item); // Otra opción para mostrar
        console.log(this.item) //Fuera de la clase yo podría decir si mostrar los elementos en documeto.write o console.log
     }


}

//CREANDO UN OBJETO A PARTIR DE LA CLASE STACK
let stack01 = new Stack ()

//Para utilizar los métodos definidios en la "super-clase"

//Push
stack01.push('Hello')
stack01.push('Hola')
stack01.push('OI')
stack01.push('Halo')
stack01.push('Bonjour')
stack01.print()
//console.log(stack01)

let ultimo_elemento = stack01.pop()
stack01.print()
//console.log(stack01)