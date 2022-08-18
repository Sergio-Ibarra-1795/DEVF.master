/*1.- Hacer una función que reciba como parámetros una pila, y un número.
La función debe retornar tantos elementos como diga el número (segundo parámetro),
 de arriba para abajo.*/

//Para implementar una pila en JS
class Stack {
    constructor(){
        this.item = [] 
    }

    push(item){ 
        this.item.push(item);
    }

    pop(){ 
       return this.item.pop(); 
    }

    peak(){ 
        return this.item(this.item.length-1);
     }

    size(){ 
        return this.item.length; 
     }
    
    print(){ 
        console.log(this.item) 
     }


}

let stack01 = new Stack ()

stack01.push('Soy el 1er elemento agregado')
stack01.push('Soy el 2do elemento agregado')
stack01.push('Soy el 3er elemento agregado')
stack01.push('Soy el 4to elemento agregado')
stack01.push('Soy el 5to elemento agregado')
stack01.push('Soy el 6to elemento agregado')
stack01.push('Soy el 7mo elemento agregado')


//n = Number(prompt(`Elige un número del 1 al ${stack01.length}`));

let maneja_pila = function (stack,n) {
    let new_array = [];
    for(let i=0; i<n ;i++){
        new_array.push(stack.pop())
    }
    return new_array
}

console.log(maneja_pila(stack01,4));



