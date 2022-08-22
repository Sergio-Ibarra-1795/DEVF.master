
/*2.- Se tiene una cola en la cual se han repartido tickets 
con el orden de atención. Sin embargo, llegada la hora de 
inicio hay muchos “colados”, es por esto que se le ordena 
al vigilante que retire a todos aquellos que no tienen 
ticket. Muestra la cola inicial, qué elementos fueron 
retirados de la cola y la cola final.
 
Sugerencia: desencolar cada elemento, si tiene el ticket se 
vuelve a encolar, si no se retira.*/

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
    
    back() {
        //???
        return this.items[this.items.length - 1]
    }
    
    front() {
        return this.peek()
    }
    
    isEmpty() { //Si es cero, de volverá True
        return this.items.length == 0
    }
    
    size() {
        return this.items.length
    }
    
    print() {
        // return this.items
        console.log(this.items)
    }

}

let q = new Queue() 

console.log(q.enqueue("Mandar correos"))
console.log(q.enqueue("Sacar la basura"))
console.log(q.enqueue("Ver una pelicula"))

console.log(q.dequeue());

console.log(q.dequeue());

console.log(q.dequeue());

console.log(q.isEmpty());


let queue_2 = new Queue();

queue_2.enqueue({ user:'User1', ticket:true   })
queue_2.enqueue({ user:'User2', ticket:true   })
queue_2.enqueue({ user:'User3', ticket:false  })
queue_2.enqueue({ user:'User4', ticket:true   })
queue_2.enqueue({ user:'User5', ticket:false  })
queue_2.enqueue({ user:'User6', ticket:false  })
queue_2.enqueue({ user:'User7', ticket:true   })
queue_2.enqueue({ user:'User8', ticket:true   })
queue_2.enqueue({ user:'User9', ticket:true   })
queue_2.enqueue({ user:'User10', ticket:false })
queue_2.enqueue({ user:'User11', ticket:true  })

// Entrada: sin_colados(queue)
// Salida: [
//  { user:'User1', ticket: true },{ user:'User2', ticket: true },
//  { user:'User4', ticket: true },{ user:'User7', ticket: true }, 
//  { user:'User8', ticket: true },{ user:'User9', ticket: true },
//  { user:'User11', ticket: true }
//]



function sin_colados(queue) {
    let colados = new Queue()
    
    let size = queue.size()

    console.log("Inicial:")
    queue.print()

    for(let i = 0; i<size ; i++) {
        if(queue.peek().ticket) {
            queue.enqueue(queue.dequeue())
        } else {
            colados.enqueue(queue.dequeue())            
        }
    }
    
    console.log("Retirados:")
    colados.print()

    console.log("Final:")
    queue.print()

}


sin_colados(queue_2)


