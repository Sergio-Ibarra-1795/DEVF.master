/*2.- Escribe una función “reemplazar” 
que tenga como parámetros una pila de elementos de tipo
 Number, y dos valores de tipo Number “nuevo” y “viejo”,
  de forma que si el segundo valor aparece en algún lugar
   de la pila, sea reemplazado por el primero 
   (Solo la primera vez),y hará pop de los elementos más nuevos.*/


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

let stack02 = new Stack ()

stack02.push(6)
stack02.push(5)
stack02.push(3)
stack02.push(4)
stack02.push(7)
stack02.push(1)
stack02.push(2)
stack02.push(5)
stack02.push(2)

let reemplazar= function (stack,nuevo, viejo) {
    for(let i=stack.size(); i>=0;i--){
        if(viejo===stack.pop()){
            stack.push(nuevo)
            break
        } 
    }
    return stack
}

console.log(stack02);

console.log(reemplazar(stack02,4,1));

