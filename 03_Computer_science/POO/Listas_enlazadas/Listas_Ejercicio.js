class Node {
    constructor(data) {
        this.data = data
        this.next = null // El atributo this.next esta APUNTANDO a null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
        // this.length
    }
    
    insert(data) {
        let node = new Node(data)
    
        if(this.head == null) {
            this.head = node
        } else {
            let current = this.head
            while(current.next != null) {
                current = current.next
            }
            // current => Node(3)
            current.next = node
        } 
    }
    
    delete(data) { // delete(2)
        let prev = this.head
        let current = this.head
        
        if(this.head.data == data) {
            this.head = this.head.next
        } else {
            while(current.data !== data) {
                prev = current
                current = current.next
            }
            prev.next = current.next
        }
    }
    
    print() {
        let res = ""
        let current = this.head
        while(true) {
            if(current == null) {
               
                break
            }
            res += `${current.data} -> `

            current = current.next
        }
        return res += "null"
    } 
    search(data) { // search(4)
        let current = this.head
        
        while(!(current == null || current.data == data)) {
            current = current.next
        }
        return current
    }
    
    insert_at(data_before, data) {
        let node = new Node(data)
        node = this.search(data)
        this.search(data).next = node
    }

    mayores_que(n){
        let res = []
        let current = this.head
        while(true) {
            if(current == null) {
               
                break
            }
            //res += `${current.data} -> `
            if(current.data >n){
                res.push(current.data)
            }
            current = current.next
        }
        return res

    }
}


//Función para obtener números enteros positvos 
function rn(limit){
    let n = Math.random()*limit
    return Math.floor(n)

}


function crear_lista_enlazada(size){
    let ll = new LinkedList()
    for (let i=0;i<size;i++){
        ll.insert(rn(100))
    }
    return ll
}



lista = crear_lista_enlazada(10);
console.log(lista)

lista2 = crear_lista_enlazada(20)
console.log(lista2)

lista3 = lista2.mayores_que(10)
console.log(lista3)

