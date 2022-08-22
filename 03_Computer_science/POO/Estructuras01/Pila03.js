/*3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
camino. Muestre el camino recorrido tanto de ida como de vuelta. */


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

let stack03 = new Stack ()

stack03.push("Partida")
stack03.push("Castillo embrujado")
stack03.push("Una puertota")
stack03.push("El camellom")
stack03.push("El acuario")
stack03.push("Meta")

stack03.print();
stack03.size();


let camino = function(stack){
    let new_camino = new Stack();
    let elemento;
    for(i=0;i<stack03.size();i++){
       elemento = stack.pop()
       new_camino.push(elemento)
    }
    return new_camino
}

console.log(camino(stack03));