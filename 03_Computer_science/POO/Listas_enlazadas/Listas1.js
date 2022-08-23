/*1.- Implemente un procedimiento que inserte un dato 
de modo similar al insertar, al final de la lista. Pero 
ahora, no se debe permitir insertar datos repetidos, 
si un dato ya está almacenado entonces la lista no cambia*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = 0;
    }
    
    insert(data) {
    
        let node = new Node(data)
    
        if(this.head == null) {
            this.head = node;
        } else {
            let current = this.head
            for(let i = 0; i < this.size; i++) {
                if(current.next == null) {
                    current.next = node
                } else {
                    current = current.next
                }  
            }
        }
        
        this.size = this.size + 1
    }
    
    delete(data) {        
        let current = this.head
        let anterior = current;
        for(let i = 0; i < this.size; i++) {
            if(current.data == data) {
                //current.next = node
                anterior.next = current.next
            } else {
                anterior = current
                current = current.next
            }
        }
        
        this.size = this.size - 1
    }
    
    search(data) {
        let current = this.head
        for(let i = 0; i < this.size; i++) {
            if(current.data == data) {
                //current.next = node
                return current
            } else {
                current = current.next
            }
        }
    }

    print() {
    
    }
}


let ll = new LinkedList()

// Con nodos...
let node = new Node("Tesis")
ll.insert(node)

// Con data

ll.insert("Tesis")


ll = new LinkedList()
ll.insert("Datos")

ll.insert("Datos II")

ll.insert("Datos III")

ll.insert("Datos IV")

ll.search("Datos V")

let ll2 = new LinkedList()

console.log(ll2)

ll2.insert(1)
ll2.insert(2)
ll2.insert(3)
ll2.insert(4)
ll2.insert(5)

ll2.delete(3)

console.log(ll2)