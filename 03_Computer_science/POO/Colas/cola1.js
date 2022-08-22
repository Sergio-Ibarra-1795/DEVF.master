/*1.- Se tiene una cola de colores y se tiene que dividir 
en dos colas, respetando el orden y alternando a partir 
de su índice.*/


//Implementación de la cola 
class Queue {

    constructor() {
        this.items = []
    }

    enqueue(item) {
        this.items.push(item)
    }
    
    dequeue() {
        return this.items.shift()
    }
    
    peek() {
        return this.items[0]
    }
    
    size() {
        return this.items.length
    }
    
    print() {
        console.log(this.items)
    }
    
    isEmpty() {
        /* if(items.length == 0) {
                return true
            } else {
                return false
            } 
        */
        return this.items.length == 0
    }
    
    front() {
        return this.peek()
    }
    
    back() {
        return this.items[this.items.length - 1]
    }
}


//Instanciación de la "cxola pirncipal a separar"
let queue = new Queue();

queue.enqueue("amarillo")
queue.enqueue("rosa")
queue.enqueue("rojo")
queue.enqueue("verde")
queue.enqueue("azul")
queue.enqueue("negro")
queue.enqueue("morado")
queue.enqueue("blanco")



//Función para separar la cola "principal"

function separar_queues(queue){
    let j = 1;
    let cola_pares = new Queue()
    let cola_nones = new Queue()
    let cola_size = queue.size()
    for(let i = 0; i < cola_size; i++){
        if(j % 2 == 0){
            cola_pares.enqueue(queue.dequeue())
        }else{
            cola_nones.enqueue(queue.dequeue())
        }
        j++ // j = j + 1
    }
    return cola_nones.print() + cola_pares.print()
}





//Llamar a la función que separa colas 
console.log(queue);

console.log(separar_queues(queue));
